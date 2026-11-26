# The Theory of RAG: Teaching the AI New Tricks

> **Retrieval-Augmented Generation (RAG)** connects a general-purpose large language model to a specific, trusted knowledge base at the moment a question is asked.

RAG is for situations where an AI must answer from **private documents, current schedules, pricing sheets, policies, FAQs, or other information that was not included in its original training data**.

Think of RAG as an **open-book exam**: the model may be a brilliant writer and reader, but the application first searches the right reference material, gives the model a small set of relevant passages, and instructs it to answer from those passages.

---

## Table of Contents

- [Why RAG Is Needed](#why-rag-is-needed)
- [RAG in One Sentence](#rag-in-one-sentence)
- [The Isolated Professor Analogy](#the-isolated-professor-analogy)
- [Limitations of a Standalone LLM](#limitations-of-a-standalone-llm)
- [Fine-Tuning vs. RAG](#fine-tuning-vs-rag)
- [Core RAG Concepts](#core-rag-concepts)
- [The RAG Pipeline](#the-rag-pipeline)
- [End-to-End Example](#end-to-end-example)
- [Practical Takeaways](#practical-takeaways)
- [Quick Revision](#quick-revision)

---

## Why RAG Is Needed

A large language model (LLM) is excellent at reasoning, language, summarization, and explanation. However, it cannot automatically know:

- Live or recently changed company information
- Private course schedules or student records
- Internal policies and procedures
- Prices and payment rules
- The latest documentation or FAQ answers
- Information stored in databases or untrained documents

| The model is good at... | The model does not automatically know... |
|---|---|
| JavaScript, React, Node.js, APIs, and databases | Your company's current course price |
| Explaining technical concepts clearly | Today's internal schedule |
| Writing and summarizing natural language | Your private policy document |
| Producing a confident response | Whether a retrieved fact is relevant or current |

> **Teaching point:** An LLM can sound intelligent and still fail when the correct information is not available at answer time.

---

## RAG in One Sentence

**RAG retrieves relevant information from external sources and provides that information to an LLM as context before the model generates an answer.**

The name describes the complete process:

| RAG component | Meaning | Responsibility |
|---|---|---|
| **Retrieval** | Search for relevant information | Find the right page, paragraph, or chunk |
| **Augmented** | Add retrieved information to the prompt | Give the model evidence before it responds |
| **Generation** | Let the LLM produce the final response | Read the evidence and write a helpful answer |

```text
User question
     |
     v
Search the knowledge base
     |
     v
Retrieve relevant passages
     |
     v
Insert passages into a prompt
     |
     v
LLM generates a grounded answer
```

RAG does not require the model to permanently memorize your data. The data is supplied **temporarily** in the request that produces the answer.

---

## The Isolated Professor Analogy

Imagine hiring a brilliant Computer Science professor.

The professor understands JavaScript, React, Node.js, APIs, databases, and programming logic. The professor can explain difficult subjects and write useful code.

Now imagine that the professor is locked in a room with:

- No internet connection
- No updated course schedule
- No pricing sheet
- No student handbook
- No internal company notes

The professor is still intelligent, but **isolated**. The professor can answer general programming questions, but may not reliably answer questions about Evangadi's latest batch, official price, or current policy.

### Give the Professor the Handbook

Instead of trying to change the professor's brain, give the professor the correct page from the student handbook at the moment the question is asked:

1. The student asks a question.
2. The system searches the Evangadi course calendar.
3. The system retrieves the relevant paragraph.
4. The application sends the question and retrieved paragraph to the LLM.
5. The LLM reads that evidence and writes the answer.

This is exactly how RAG turns a general-purpose model into a controlled, document-aware assistant.

---

## Limitations of a Standalone LLM

### 1. Knowledge Cutoff

An LLM is trained on data available during its training period. After training, it does not automatically learn new events, schedules, prices, or policy changes.

**Example:** “When does the next Evangadi batch start?”

- The schedule may have been created after the model was trained.
- The model may say it does not know.
- Worse, it may invent a believable date.

This is the **knowledge cutoff problem**. The model is not necessarily broken; it is frozen relative to the facts learned during training.

### 2. Private Data

Most useful organizational data is private or proprietary:

- Course prices
- Internal schedules
- Student groups
- Company policies
- Payment rules
- Support documents

**Example:** “How much is the Full Stack class?”

If the official price was never included in the model's training data, the model should not guess a generic education cost.

### 3. Hallucination

A hallucination is a confident answer that is not supported by the actual facts. The model is not intentionally lying; it is predicting likely text based on learned patterns.

| Question | Unsupported answer | Why it is problematic |
|---|---|---|
| When does Phase 3 start? | “It starts next Monday.” | The model guessed instead of checking the schedule |
| How much is the class? | “Around $5,000.” | The answer uses general knowledge, not Evangadi data |
| Can I join late? | “Yes, always.” | The real rule may depend on the current cohort policy |

Hallucinations are particularly dangerous in company chatbots because users may trust them and act on a wrong price, date, or policy.

---

## Fine-Tuning vs. RAG

Fine-tuning means further training an existing model with your own examples. In the professor analogy, it resembles sending the professor to orientation and making the professor memorize company documents.

Fine-tuning can improve repeated behavior, tone, style, and output format. However, retraining a model whenever a price or schedule changes is slow and expensive.

| Fine-Tuning | RAG |
|---|---|
| Changes or reinforces model behavior | Supplies facts at request time |
| Useful for tone, style, or repeated formats | Useful for changing facts and current knowledge |
| Training is required for major knowledge updates | Documents can be updated independently |
| Knowledge may be difficult to audit or trace | Retrieved source passages can be inspected |
| Expensive and slow for frequently changing information | Better suited to schedules, prices, FAQs, and policies |

> **Rule of thumb:** use fine-tuning to change *how* a model behaves; use RAG to add or update *what the model knows* for a specific task.

They are not mutually exclusive. A fine-tuned model can also use RAG, but RAG is usually the more practical solution for frequently changing documents.

---

# Core RAG Concepts

## A. The Context Window

The **context window** is the maximum amount of text an LLM can read in one request.

It includes:

- The system instructions
- The user question
- Retrieved context
- Previous chat messages
- Other prompt instructions

A large context window does not make unlimited context a good idea. Sending too much information can:

- Increase cost
- Slow down responses
- Dilute the model's attention
- Make the most relevant evidence harder to identify

```text
Bad: Send a 10,000-page textbook for every question.
Better: Search the textbook and send only the relevant paragraphs.
```

RAG depends on **selecting the right context**, not sending every available document.

---

## B. Context Stuffing

**Context stuffing** means placing retrieved text directly into the prompt sent to the LLM. It is the **Augmented** part of RAG.

A typical prompt structure is:

```text
System Prompt:
You are a helpful Evangadi assistant.
Use only the context below to answer the student.

Context:
[PASTE RETRIEVED TEXT HERE]

Student Question:
[PASTE USER QUESTION HERE]
```

The model is not being asked to remember the answer from training. It is being asked to read the provided text and answer from that text.

### A Good Prompt Pattern

- Define the assistant's role.
- Restrict the allowed knowledge source.
- Provide retrieved passages.
- Present the question.
- Require a fallback when evidence is missing.

---

## C. Hallucination Prevention

**Hallucination prevention** adds strict prompt rules that stop the AI from guessing when the answer is absent from retrieved context.

```text
If the answer is not found in the provided context, say:
"I do not know based on the provided information."
Do not use outside knowledge.
Do not guess.
Do not invent details.
```

This rule is especially important for controlled business chatbots. If the chatbot is designed to answer only from Evangadi documents, it should not answer from general internet knowledge or its pretraining.

> A strict “I do not know” response is often safer and more useful than a plausible but unsupported answer.

---

# The RAG Pipeline

A RAG system is like a searchable AI library:

1. **Ingest** the documents.
2. **Chunk** the text into useful pieces.
3. **Embed** each piece as a meaning vector.
4. **Store** the text and vectors.
5. **Retrieve** relevant pieces for a question.
6. **Generate** an answer from those pieces.

```text
Ingestion -> Chunking -> Embedding -> Storage -> Retrieval -> Generation
```

The first four steps build the knowledge base. Retrieval and generation happen when a user asks a question.

---

## Step 1: Ingestion

**Ingestion** means bringing information into the system so the application can process it.

Possible sources include:

- Text files
- PDFs
- Word documents
- Website pages
- Internal manuals
- FAQs
- Database records

Example:

```text
Source file: evangadi-info.txt
Goal: Read the text and prepare it for processing.
```

Good practice is to save metadata, such as:

- File name
- Section title
- Page number
- Date
- Source type
- Document URL
- Topic or category

**Metadata matters** because it makes it possible to show answer sources, filter results, and diagnose retrieval problems.

---

## Step 2: Chunking

**Chunking** splits a large document into smaller pieces that are practical to embed, search, store, and place into a prompt.

| Bad chunking | Good chunking |
|---|---|
| Cuts a sentence in half | Keeps complete ideas together |
| Creates chunks with no context | Uses overlap so meaning continues |
| Produces pieces that are too large | Uses medium-sized, meaningful pieces |
| Ignores headings and paragraphs | Uses natural sections and boundaries |

### Recursive Chunking

A common approach tries to split text at increasingly small natural boundaries:

1. Split by large sections or headings.
2. If a section is too large, split by paragraph.
3. If a paragraph is too large, split by sentence.
4. If a sentence is still too large, split by character limit.

### Chunk Overlap

**Overlap** repeats a small part of one chunk at the start or end of the next chunk.

For example, the last 50 characters of Chunk 1 may be repeated in Chunk 2.

```text
Chunk 1: "The Full Stack class price is"
Chunk 2: "is $1000. Students may contact support..."
```

Overlap helps maintain continuity:

- Prevents an idea from being cut off
- Preserves a short amount of surrounding context
- Improves the chance that a complete fact can be retrieved

Chunk size and overlap require tuning. The goal is to make chunks specific enough to retrieve, but complete enough to explain an answer.

---

## Step 3: Embedding

After chunking, every chunk is converted into an **embedding**.

An embedding is a list of numbers that represents the meaning of text:

```text
Text:
"The Full Stack class price is $1000."

Embedding:
[0.13, -0.44, 0.82, 0.06, ...]
```

Chunks with similar meanings tend to produce vectors that are close to one another in vector space.

> The same embedding model must be used for both document chunks and user questions. Otherwise, the system is not comparing vectors produced by a consistent representation.

Embeddings allow retrieval to use **semantic similarity** rather than exact keyword matching alone.

---

## Step 4: Storage

Storage saves both the original chunk text and its embedding vector so that the application can search it later.

| Field | Purpose |
|---|---|
| `id` | Unique identifier for the chunk |
| `content` | The original text in the chunk |
| `embedding` | Vector representation of the text |
| `source` | File or document the chunk came from |
| `metadata` | Optional details such as section, page, topic, or date |

For learning projects, MySQL with a JSON column can store vectors and demonstrate the workflow. Production systems usually use a vector database or vector-enabled database optimized for large-scale similarity search.

The storage layer should preserve enough information to let the application:

- Return the original text
- Cite or display the source
- Filter by document or metadata
- Rebuild or re-index the knowledge base

---

## Step 5: Retrieval

When a user asks a question:

1. The question is converted into an embedding.
2. The question vector is compared with stored chunk vectors.
3. Chunks are ranked by similarity.
4. The most relevant chunks are selected.

Cosine similarity is a common similarity measure. A higher score means the question and chunk are generally closer in meaning.

| Chunk | Similarity score | Decision |
|---|---:|---|
| “Full Stack class price is $1000.” | 0.92 | Use: highly relevant |
| “React phase starts on Saturday.” | 0.63 | Maybe useful, but not about price |
| “Office holiday schedule.” | 0.18 | Ignore: irrelevant |

### Top-k

**Top-k** means selecting a fixed number of the best matches, such as the top 3 chunks.

### Threshold

A **threshold** means ignoring matches below a minimum similarity score.

For example:

- `k = 3`
- `threshold = 0.70`

Only chunks scoring at least `0.70` may be provided to the LLM. Thresholds can reduce weak or irrelevant context, although the correct threshold depends on the embedding model and data.

---

## Step 6: Generation

Generation is the final step. The application:

1. Adds the retrieved chunks to a prompt.
2. Adds the user's question.
3. Gives the LLM instructions to use only the evidence.
4. Asks the model to produce an answer.

```text
You are a helpful Evangadi Professor.
Use ONLY the context below.
If the answer is not in the context, say:
"I do not know based on the provided information."

Context:
[Top retrieved chunks]

Question:
[Student question]

Answer:
```

This is where search and language generation meet:

- **Search** finds evidence.
- **Retrieval** ranks and selects evidence.
- **The LLM** explains and summarizes the evidence.
- **Prompt rules** limit unsupported guessing.

---

# End-to-End Example

## User Question

> “How much is the Full Stack class?”

## What Happens Behind the Scenes

1. The application receives the student question.
2. The question is converted into an embedding vector.
3. The vector is compared with stored document embeddings.
4. The top matching chunks are selected.
5. The chunks are inserted into the prompt as context.
6. The LLM answers using only that context.

## Retrieved Context

```text
Chunk 1:
The Full Stack Development class costs $1000.
Students may contact support for payment options.

Chunk 2:
The next Full Stack batch begins on Saturday.
Orientation details will be sent by email.

Chunk 3:
Students should complete registration before the start of the batch.
```

## Grounded Answer

> The Full Stack Development class costs $1000. For payment options, students should contact support.

The answer is not a random guess. It is grounded in retrieved evidence.

## When the Answer Is Not Found

**Student:**

> “Who is the CEO of Apple?”

**Retrieved context:**

```text
Only Evangadi course information was found.
No Apple CEO information appears.
```

**Correct answer:**

> I do not know based on the provided information.

This behavior may feel strict, but it is intentional for a controlled company chatbot. The chatbot remains inside the knowledge base it was designed to use.

---

# Practical Takeaways

## 1. RAG solves an information availability problem

A standalone LLM knows general patterns from training, but RAG gives it relevant facts from your own documents at answer time.

## 2. Retrieval quality determines answer quality

If the system retrieves weak or irrelevant chunks, the final answer is likely to be weak or misleading even if the LLM is powerful.

## 3. Chunking is a retrieval design decision

Chunks should:

- Preserve complete ideas
- Use natural document boundaries
- Avoid cutting important facts apart
- Use overlap when needed
- Stay small enough for targeted retrieval

## 4. Metadata improves control and trust

Metadata can support:

- Source citations
- Document filtering
- Update tracking
- Debugging
- Access control
- Answer relevance checks

## 5. Top-k and thresholds balance precision and context

- **Top-k** controls how many chunks are selected.
- **A threshold** controls how weak a match is allowed to be.
- Retrieval should not overwhelm the context window.

## 6. Prompt rules prevent unsupported answers

The generation prompt should clearly state:

- What sources may be used
- Whether outside knowledge is allowed
- What fallback response is required
- How uncertain answers should be handled

## 7. RAG is easier to update than retraining

When a price or schedule changes, the knowledge base can be updated and re-indexed without retraining the base model.

## 8. RAG is not magic

RAG does not make an LLM know everything. It helps the LLM answer more accurately by supplying the right information at the right time.

---

# Quick Revision

## RAG Formula

```text
Relevant external information
+ clear prompt instructions
+ an LLM that can read and summarize
= a more grounded generated answer
```

## Pipeline Checklist

- [ ] **Ingestion:** Load source documents
- [ ] **Metadata:** Record source and document details
- [ ] **Chunking:** Split text into complete, searchable pieces
- [ ] **Overlap:** Preserve continuity between chunks
- [ ] **Embedding:** Convert chunks and questions into vectors
- [ ] **Storage:** Save text, vectors, sources, and metadata
- [ ] **Retrieval:** Rank chunks by meaning similarity
- [ ] **Top-k:** Select the most useful matches
- [ ] **Threshold:** Reject weak matches
- [ ] **Context stuffing:** Place evidence into the prompt
- [ ] **Generation:** Produce the final answer
- [ ] **Fallback:** Say when the answer is not supported

> **Final takeaway:** RAG is the bridge between a general AI model and a reliable knowledge base. It combines document search with language generation so the model can answer from evidence rather than guess from memory.