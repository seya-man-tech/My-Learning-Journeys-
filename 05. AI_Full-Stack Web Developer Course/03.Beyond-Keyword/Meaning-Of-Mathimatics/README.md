# The Mathematics of Meaning: Vectors, Embeddings & Semantic Search

> **How can software find the right information when people use different words for the same idea?**  
> This guide explains how text becomes a mathematical object that computers can compare: a vector in an embedding space.

## Overview

**Source reviewed:** *The Mathematics of Meaning: Vectors & Embeddings* (10-page PDF).

Traditional search often looks for the exact characters a person typed. That is useful for precise lookups, but it can miss a good answer when a query and a document use synonyms, different forms of a word, or different phrasing. It can also return misleading matches when a word has several meanings.

The PDF introduces **semantic search** as a way to search by meaning rather than by exact wording. An **embedding model** converts text into a numerical **vector**. Text with related meaning is represented by vectors that tend to point in similar directions, and a similarity measure—most often **cosine similarity** in the examples—helps rank candidate results.

The central chain of ideas is:

1. Language is converted into numbers by an embedding model.
2. Those numbers form vectors in a multidimensional space.
3. Vector similarity estimates how closely two pieces of text are related.
4. A search application uses those scores to rank, filter, and return useful content.

> **In one sentence:** embeddings are a mathematical bridge between human language and operations such as searching, ranking, recommending, and retrieving information.

## At a glance

| Idea | What it means |
|---|---|
| **Keyword search** | Looks for matching words or characters. |
| **Semantic search** | Looks for content that is related in meaning, even when the words differ. |
| **Embedding** | A numerical representation of a word, phrase, sentence, passage, or document. |
| **Vector** | An ordered list of numerical coordinates. |
| **Cosine similarity** | Compares the angle between two vectors to estimate how similarly they point. |
| **Vector search** | Finds and ranks stored vectors that are close to a query vector. |
| **Hybrid search** | Combines meaning-based retrieval with exact keyword matching. |

## 1. Why exact keyword search falls short

A basic search can be expressed as a database pattern such as:

```sql
WHERE title LIKE '%keyword%'
```

This tests whether the typed characters occur in a field. It does **not** establish that a document answers the same question or expresses a related idea.

### Common failure cases

- **Synonyms:** A person searches for “cheap phone,” while a listing says “affordable smartphone.”
- **Related terms:** A search for “puppy” may miss a document titled “dog care guide.”
- **Word forms:** “Run” may not match “running,” “runner,” or “ran” unless additional rules are applied.
- **Spelling and wording:** A query for “JS framework” may not match a page that says “JavaScript library.”
- **Context and polysemy:** A keyword such as “jaguar” may refer to an animal or a car brand. “Python” may refer to a programming language or a snake. The surrounding words determine which sense is intended.

Keyword search remains valuable for exact names, identifiers, error codes, and other literal constraints. Its limitation is that matching letters is not the same as matching meaning.

## 2. Semantic search: matching meaning instead of letters

Semantic search tries to answer:

> **“Are these ideas close in meaning?”**

Rather than requiring the same words, it represents a query and candidate documents in a form that makes their semantic relationship measurable.

For example:

| Query | Possible relevant result | Why it can match |
|---|---|---|
| “Puppy training” | “Dog obedience basics” | A puppy is a young dog, and training relates to obedience. |
| “Budget laptop” | “Affordable notebook computer” | The wording differs, but the concepts overlap. |
| “Frontend JavaScript tool” | “React component library” | The terms are related within the software-development domain. |
| “Jaguar animal habitat” | Information about big cats | “Animal” and “habitat” provide context that disambiguates the query. |

The computer does not understand these examples in the way a person does. The PDF describes embedding models as learning language patterns from large amounts of data—such as which words and phrases occur in similar contexts—and using those patterns to place related text near one another in an embedding space.

## 3. Embeddings and vector space

### What is an embedding?

An **embedding** is a numerical representation produced by an embedding model. Its input can be a:

- word or phrase
- sentence
- paragraph
- document chunk
- full document

The result is a vector, often written in a form such as:

```text
[0.10, -0.50, 0.80, 0.90, ...]
```

The numbers are not intended to be read as a sentence or interpreted independently as explicit labels. Their value comes from how they work **together**: the model learns a space in which useful relationships between pieces of text can be compared mathematically.

### Vectors, coordinates, and dimensions

A vector is an ordered list of numbers. Each number is a coordinate along one **dimension** of the space. In two dimensions, a vector can be drawn as a point or arrow such as `[x, y]`. Real embeddings commonly have hundreds or thousands of dimensions, so they cannot be visualized directly.

The PDF uses a deliberately simple two-feature example:

| Word | Size | Length | Vector | Toy interpretation |
|---|---:|---:|---|---|
| Fat | 5 | 1 | `[5, 1]` | Large size, short length |
| Massive | 10 | 2 | `[10, 2]` | Larger size, still short |
| Long | 1 | 5 | `[1, 5]` | Small size, long length |

In this toy space, “Fat” and “Massive” point in the same direction: both emphasize size more than length. “Long” points in a different direction because its length coordinate dominates. This helps illustrate **directional similarity**.

> **Important:** this is a teaching model, not a description of real embedding dimensions. Real models do not usually have simple, human-labeled coordinates such as “animal,” “formal,” or “size.” A single dimension may mix many learned patterns, and a concept may be spread across many dimensions.

Vectors from different embedding models generally should not be compared directly. Models can use different dimensions and different learned spaces. Use the same model for stored documents and incoming queries so their vectors are comparable.

## 4. Measuring similarity with cosine similarity

The PDF focuses on **cosine similarity**, which compares the angle between two vectors. For vectors \(A\) and \(B\):

$$
\operatorname{cosine\_similarity}(A,B)
= \frac{A \cdot B}{\lVert A\rVert \,\lVert B\rVert}
$$

The formula combines three pieces:

| Term | Meaning | How it is calculated |
|---|---|---|
| \(A \cdot B\) | Dot product | Multiply corresponding coordinates, then add the products. |
| \(\lVert A\rVert\) | Magnitude (length) of \(A\) | Take the square root of the sum of the squared coordinates. |
| \(\lVert B\rVert\) | Magnitude (length) of \(B\) | Calculate the same length for \(B\). |

For two-dimensional vectors \(A=[a_1,a_2]\) and \(B=[b_1,b_2]\):

$$
A \cdot B = a_1b_1+a_2b_2
$$

$$
\lVert A\rVert = \sqrt{a_1^2+a_2^2}
\qquad
\lVert B\rVert = \sqrt{b_1^2+b_2^2}
$$

### Why compare angles?

Cosine similarity emphasizes **direction** rather than raw vector length. If one vector is a scaled version of another, both point in the same direction and have cosine similarity 1. In the PDF’s simplified explanation, this is useful because text length or repetition can affect vector magnitude, while direction can still express a similar pattern.

Treat scores as **model- and data-dependent similarity signals**, not universal percentages. The PDF’s score descriptions are teaching intuitions:

| Example score | Simple interpretation in the guide |
|---:|---|
| `1.0` | Same direction; extremely similar (for example, identical text). |
| `0.7–0.9` | Very related in the illustrative scale (for example, “Hello” and “Hi there”). |
| Around `0.0` | Weakly related or unrelated in the illustrative scale. |
| `-1.0` | Opposite direction; a rare, simplified interpretation for many text-embedding systems. |

These are not guaranteed ranges or universal cutoffs. A score of `0.80` from one model does not necessarily mean the same thing as `0.80` from another. Evaluate scores using examples from the actual application.

### Worked example: “Fat” and “Massive”

Using the toy vectors \(A=[5,1]\) and \(B=[10,2]\):

1. **Dot product**

   $$
   A \cdot B = (5 \times 10) + (1 \times 2) = 52
   $$

2. **Magnitudes**

   $$
   \lVert A\rVert = \sqrt{5^2+1^2}=\sqrt{26}\approx5.10
   $$

   $$
   \lVert B\rVert = \sqrt{10^2+2^2}=\sqrt{104}\approx10.20
   $$

3. **Cosine similarity**

   $$
   \frac{52}{\sqrt{26}\sqrt{104}}=1.0
   $$

The vectors have different lengths, but the second is a scaled version of the first, so they point in exactly the same direction in this toy space.

### Worked example: “Fat” and “Long”

Let \(A=[5,1]\) and \(B=[1,5]\):

1. \(A \cdot B=(5 \times 1)+(1 \times 5)=10\)
2. Both magnitudes are \(\sqrt{26}\).
3. The cosine similarity is \(10/26\approx0.38\).

In the toy model, the score is lower because “Fat” emphasizes size while “Long” emphasizes length. This is a geometric demonstration, not a claim about how a real language model would score those words.

### Another toy example: a technology stack

The PDF also imagines two dimensions—“Is Frontend” and “Is Backend”—to illustrate that:

- React and jQuery both receive `[1, 0]`, so their cosine similarity is `1.0` in the toy model.
- Node.js receives `[0, 1]`, so its vector is perpendicular to `[1, 0]` and the toy cosine similarity is `0.0`.

The guide cautions that a real embedding model may still recognize relationships between React and Node.js because both relate to JavaScript. Real vector spaces are richer than this two-axis example.

## 5. How semantic search works in an application

The PDF separates semantic search into two phases: **indexing** and **querying**.

### Phase 1: Index the documents

1. **Collect content:** Gather articles, product descriptions, PDFs, support tickets, notes, or other records.
2. **Chunk long documents:** Split large items into focused passages so each vector represents a manageable idea.
3. **Create embeddings:** Send each chunk to an embedding model.
4. **Store vectors and source data:** Save each vector together with its original text and useful metadata, such as a title, URL, author, date, category, or language.
5. **Build a vector index:** Use a vector database or index to make similarity lookups efficient.

### Phase 2: Search with a user query

1. Convert the query to a vector using the **same embedding model** used for the indexed content.
2. Compare the query vector with stored vectors, either directly or through an index that finds likely nearest matches.
3. Rank candidates from most similar to least similar.
4. Optionally apply a score threshold to suppress weak matches.
5. Return the best results with useful context, such as a title, snippet, or source link.

For example, a search for “how to train a puppy” might rank “Dog obedience basics” above “Puppy feeding schedule,” and place an unrelated car-repair passage below both. The ranking is useful only if the underlying chunks and scores are evaluated against real queries.

### Thresholds and result counts

A **threshold** is a minimum score required for a result to be accepted. A low threshold returns more results but may include irrelevant material; a high threshold reduces weak matches but can hide useful ones. Select thresholds and the number of results to return (`top_k`) by testing representative good and bad matches—not by assuming a score has a universal meaning.

## 6. Practical applications

The PDF highlights several uses for meaning-based vector comparisons:

- **Search boxes:** Find a note titled “embeddings explained” for a query such as “meaning of vectors in AI.”
- **Product discovery:** Connect “cheap laptop” with “budget notebook,” or “comfortable running shoes” with “cushioned trainers.”
- **Knowledge bases:** Find a “returns and reimbursements” article for a query about a refund policy.
- **Recommendations:** Suggest products, songs, articles, or movies whose vectors are similar to an item a user likes.
- **Clustering and organization:** Group similar reviews, support tickets, feedback, or research papers.
- **Chatbots and retrieval-augmented generation (RAG):** Retrieve relevant passages from a private knowledge base before an AI assistant drafts an answer. The retrieved source material gives the assistant context to use.

## 7. Limitations and practical best practices

Embeddings make search more flexible; they do not make it infallible. The PDF calls out several issues to account for:

- **Ambiguity:** A short query such as “jaguar” may need context to identify the intended meaning.
- **Specialized vocabulary:** A general model may not handle terms from a niche domain as well as domain-specific language.
- **Freshness:** New slang, names, products, or technical terms may not be well represented unless the system can retrieve recent content.
- **Bias:** Embeddings can reflect patterns and biases in their training data.
- **Chunking:** Chunks that are too long can mix topics; chunks that are too short can lose the context needed to interpret them.
- **Score interpretation:** Similarity values are not interchangeable across models and should not be treated as calibrated percentages.
- **Exact constraints:** Meaning-based search can miss the importance of exact names, codes, IDs, or required terms.

### Recommended practices from the guide

- Use the **same embedding model** for documents and queries.
- Keep each vector linked to its **original text and metadata**.
- Test with real user queries and expected relevant or irrelevant results.
- Tune `top_k` and score thresholds with those examples.
- Use metadata filters—such as date, language, category, or product type—when they help narrow the search.
- Choose chunk sizes that retain enough context without combining unrelated topics.
- Combine semantic search with keyword search when exact terms matter.

### Why hybrid search is often useful

| Search approach | Strength | Limitation |
|---|---|---|
| **Keyword** | Exact names, IDs, error codes, and required terms | Can miss synonyms and related ideas |
| **Semantic** | Meaning, paraphrases, and natural-language queries | Can miss exact constraints or misunderstand ambiguity |
| **Hybrid** | Uses both exact matching and meaning-based retrieval | More complex to build and tune |

For many applications, hybrid search is a practical balance: semantic retrieval broadens the results, while keyword matching preserves precision for literal requirements.

## 8. Structured breakdown of the PDF

The supplied 10-page PDF develops the topic in this order:

1. **The Problem with Keywords** — Exact-match search, its limitations, and examples involving synonyms, word variations, spelling, wording, and polysemy.
2. **Semantic Search: Matching Meaning Instead of Letters** — The difference between matching characters and matching concepts, with examples and an introduction to learned semantic closeness.
3. **What Is an Embedding?** — Why language is converted into numerical vectors, the text sizes embeddings can represent, and the role of the embedding model.
4. **Understanding Dimensions and Vector Space** — Coordinates, a two-dimensional size/length toy model, directional closeness, high-dimensional learned features, and visual intuition.
5. **Measuring Similarity with Cosine Similarity** — The cosine formula, dot products and magnitudes, score interpretation, and worked examples for “Fat”/“Massive,” “Fat”/“Long,” and a toy technology stack.
6. **How Semantic Search Works in an Application** — Document indexing, query-time vector comparison, ranking, thresholds, and a puppy-training search example.
7. **Practical Examples and Use Cases** — Search, recommendations, clustering, chatbots, and the connection to retrieval-augmented generation.
8. **Limitations, Mistakes, and Best Practices** — Ambiguity, domain language, freshness, bias, chunking, model-specific scores, and when to combine semantic and keyword search.
9. **Final takeaway** — Embeddings let software compare text by mathematical relationships rather than relying only on exact word matches.

## 9. Practical takeaways

1. **Meaning can be represented geometrically.** An embedding maps text to a vector, making semantic relationships available to numerical comparison.
2. **Direction can be more useful than length.** Cosine similarity focuses on whether vectors point similarly, which is why the guide uses it to explain semantic closeness.
3. **Similarity is a ranking signal, not a guarantee.** Validate thresholds and result quality against the application’s own data and queries.
4. **The full retrieval pipeline matters.** Chunking, metadata, indexing, ranking, and source presentation all affect the final search experience.
5. **Use the right tool for the constraint.** Semantic search handles paraphrase and related meaning; keyword search handles exact strings. Hybrid systems can benefit from both.

> **Final idea:** embeddings are not human-readable definitions of words. They are learned numerical representations that let software compare, rank, recommend, and retrieve text based on patterns of meaning.