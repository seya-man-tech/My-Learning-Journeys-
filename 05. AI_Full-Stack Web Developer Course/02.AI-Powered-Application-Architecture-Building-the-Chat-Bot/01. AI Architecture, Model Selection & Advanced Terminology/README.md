# AI Architecture, Model Selection & Advanced Terminology

## Module Overview

An AI-powered application is more than a model API call. It combines a user interface, application logic, model inference, and data services into a system that turns a user's request into a useful, safe, and timely response.

This module introduces the anatomy of that system and the decisions involved in choosing and guiding a model. It also establishes the terminology used throughout the course, from tokens and context windows to retrieval-augmented generation (RAG) and prompt engineering.

> **Core idea:** The model supplies language-generation capability; your application supplies the context, memory, controls, and experience around it.

## Learning Objectives

By the end of this module, you should be able to:

- Describe the main layers of an AI application and how a request moves through them.
- Explain how an application adds conversation history and external knowledge to a model request.
- Compare models by capability, cost, latency, context size, modality, privacy, and deployment requirements.
- Distinguish tokens, context windows, model weights, inference, latency, and throughput.
- Explain how temperature, top-k, and top-p affect text generation.
- Design clearer prompts and identify zero-shot, few-shot, chain-of-thought, and system-versus-user prompting patterns.

## AI Application Architecture

### Core components

| Layer | Responsibility | Common examples |
|---|---|---|
| **Frontend (interface)** | Collects user input and presents responses, controls, and conversation history. It may display generated text as it arrives. | React or another web UI; Server-Sent Events (SSE) for streamed responses |
| **Backend (orchestrator)** | Coordinates the request. It authenticates and authorizes users, validates input, builds the prompt and context, calls model and data services, and handles errors and long-running work. | FastAPI, Node.js/Express |
| **Inference layer (model/API)** | Runs a trained model to produce an output from the supplied input. A hosted model API is the interface between application code and the model service. | Hosted language-model APIs or a self-hosted model |
| **Application database (data and memory)** | Stores application data such as users, sessions, and chat history. The backend can retrieve relevant history and include it in a later model request. | MySQL, PostgreSQL |
| **Knowledge and retrieval layer** | Stores searchable knowledge representations and finds relevant source material to add to a model request. | Embedding model, vector database such as Pinecone or ChromaDB |

These are logical responsibilities, not necessarily separate servers. A small application may combine several layers; a larger system may distribute them across services.

### Typical request and response flow

1. The user submits a message through the frontend.
2. The backend verifies the user's identity and permissions, validates the request, and applies appropriate input guardrails.
3. The backend loads relevant conversation history and, when needed, retrieves relevant documents from a knowledge store.
4. It assembles a structured request from system instructions, the current user message, and the selected context.
5. The inference service generates a response. The backend may receive it incrementally and stream it to the frontend.
6. The backend applies any required output checks, records the conversation or other application data, and returns the response.
7. The frontend displays the result and remains ready for the next turn.

```text
User
  -> Frontend
  -> Backend: authenticate, validate, assemble context
       -> Application database: conversation history
       -> Retrieval service: relevant knowledge (optional)
       -> Model/API: inference
  <- Backend: check, save, and stream response
  <- Frontend: display response
```

### Context, history, and memory

A model API generally responds to the prompt and data sent with the current request; do not assume it knows the application's users or remembers previous calls. To support a continuing conversation, the application can store messages in its database, select the useful parts of the history, and include them in the next prompt. The model's **context window** limits how much input and output can fit in a single request, so history must be managed rather than appended without limit.

For knowledge that lives outside the conversation—such as product documentation or a changing information source—the application can use RAG:

1. Prepare and index source material as embeddings in a vector store.
2. Convert a query into a representation suitable for retrieval.
3. Retrieve the most relevant passages.
4. Include those passages in the model's prompt so the response can use that context.

RAG supplies selected external context; it does not change the model's learned weights.

## Choosing a Model

There is no universally best model. Choose one that meets the application's quality requirements within its latency, cost, privacy, and operational constraints.

| Criterion | Questions to ask |
|---|---|
| **Task capability** | Does it reliably handle the actual workload—such as simple chat, categorization, summarization, coding, or complex reasoning? Test representative examples rather than relying only on general reputation. |
| **Cost** | What are the input and output charges, expected request volume, and typical prompt and response sizes? Include retries and long-context requests in estimates. |
| **Latency and throughput** | How quickly must an individual user receive a response? How many requests must the service handle at once? Interactive chat often prioritizes low latency; batch jobs often prioritize throughput. |
| **Context window** | Can the model accept the longest expected prompt, including system instructions, conversation history, retrieved material, and output allowance? |
| **Modality** | Does the application need text only, or also images, audio, or video? Choose a model that supports the required inputs and outputs. |
| **Privacy and governance** | What data is sent to a provider? Are the provider's retention terms, data location, access controls, and compliance characteristics acceptable? |
| **Deployment and control** | Is a hosted API acceptable, or does the workload require deployment in your own environment, more control over the model, or offline operation? |
| **Operational effort** | Can the team support credentials, provider-specific integrations, monitoring, rate limits, scaling, and—if self-hosting—hardware and model serving? |
| **Reliability and integration** | Are the service's availability, documentation, SDKs, structured-output support, and fallback options suitable for the application? |

### Hosted proprietary models and open-weight models

| Approach | Advantages | Trade-offs |
|---|---|---|
| **Hosted proprietary model via API** | Usually quick to integrate; provider manages model infrastructure and scaling; often offers highly capable models. | Per-use cost, provider dependency, network/service availability, and provider data-handling terms must be considered. |
| **Open-weight model deployed by your team or a hosting provider** | More choice over deployment and operational control; can support workloads where data locality or customization is important. | The team must account for serving infrastructure, hardware, scaling, updates, monitoring, and the model's license. A downloadable model is not automatically unrestricted or cost-free to operate. |

### A practical selection process

1. **Define the task and quality bar.** Write down what a good answer looks like and what failures are unacceptable.
2. **Estimate workload shape.** Record expected input/output length, request volume, concurrency, and response-time target.
3. **Filter by hard requirements.** Eliminate models that lack the needed modality, context capacity, privacy terms, or deployment options.
4. **Compare candidates on real examples.** Measure answer quality, latency, and cost for representative inputs; include difficult and edge cases.
5. **Start with the least costly model that meets the bar.** Use a more capable model when testing shows the task needs it.
6. **Re-evaluate in production.** Track quality, latency, failures, and usage costs as prompts, traffic, and model offerings change.

A common pattern is to route routine requests to a fast, economical model and reserve a more capable model for requests that need it. Keep the routing rules measurable and test that the lower-cost path still meets your quality bar.

## Advanced Terminology

### Architecture and model fundamentals

- **Large language model (LLM):** A model trained to process and generate language. It produces output from the prompt and other input provided to it.
- **Inference:** Running a trained model to produce an output. Unlike training, which creates or updates model weights, inference occurs as users make requests and is a recurring source of application cost.
- **Parameters / weights:** Learned numerical values inside a model. Parameter count is a rough indicator of model size, not a guarantee of quality; larger models can require more resources and may be slower or more expensive.
- **Token:** A unit of text processed by a model. A token may be a whole word, part of a word, punctuation, or whitespace. Token counts affect request limits and, in many services, usage charges.
- **Tokenizer:** The component or rules that divide text into the tokens a model processes. Tokenization varies, so character or word counts do not precisely predict token usage.
- **Context window:** The maximum amount of tokenized input and generated output a model can handle in one request. It is not persistent memory: the application must include the information the model needs for that call.
- **Latency:** The time taken for an individual request to produce a response. This is especially visible to interactive users.
- **Throughput:** The number of requests a system can process over time. Batch workloads may prioritize throughput, while interactive features often prioritize latency.
- **Modality / multimodal model:** A modality is a type of input or output, such as text, image, audio, or video. A multimodal model handles more than one modality.
- **Embedding:** A numerical representation of content used to compare semantic similarity and retrieve related items. Embeddings commonly power vector search in RAG systems.
- **Vector database:** A store that indexes numerical vectors and supports similarity search. It can help retrieve relevant documents for a model request.
- **Retrieval-augmented generation (RAG):** A pattern that retrieves relevant external information and includes it in a prompt so a model can answer using that supplied context.
- **Guardrails:** Application checks and constraints used to help control allowed inputs, actions, and outputs. They complement authentication and authorization; they do not replace them.
- **Hallucination:** A plausible-sounding generated statement that is incorrect or unsupported. Retrieved sources, constrained prompts, and output validation can reduce risk but do not guarantee correctness.

### Generation controls

Language models generate text one token at a time by assigning probabilities to possible next tokens. Sampling controls influence how a token is selected.

- **Temperature:** Adjusts how concentrated or varied token selection is. Lower values tend to produce more predictable output; higher values tend to allow more variation. The available range and exact behavior depend on the model/API.
- **Top-k:** Limits each sampling step to the `k` most probable candidate tokens. A smaller `k` narrows the candidate pool; a larger `k` allows more alternatives.
- **Top-p (nucleus sampling):** Selects from the smallest set of likely tokens whose cumulative probability reaches a threshold `p`. The candidate set changes with the probability distribution rather than having a fixed size.

Use conservative settings for tasks where consistency and precision matter, and experiment with more varied settings for creative work. These controls affect generation behavior; they do not supply missing knowledge or ensure factual accuracy. Top-k and top-p are often treated as alternative sampling strategies, and supported settings vary by model.

### Prompt engineering

- **Prompt:** The input instructions, questions, and context provided to a model to guide its response.
- **Prompt engineering:** Designing and structuring that input to make the desired task, context, and output clearer.
- **Direct instruction:** An explicit command describing the requested task and, where useful, the expected format.
- **Open-ended instruction:** A broad prompt that leaves room for interpretation and exploration; useful for brainstorming, but more likely to produce varied outputs.
- **Task-specific instruction:** A prompt tailored to a defined task, such as translation or summarization, often with relevant input, constraints, or examples.
- **Zero-shot prompting:** Asking the model to perform a task without examples in the prompt.
- **Few-shot prompting:** Including a small number of examples to demonstrate the desired pattern, tone, or format.
- **System prompt:** Higher-level instructions that set consistent behavior or constraints for an interaction or application.
- **User prompt:** The user's specific request or message in the current interaction.
- **Chain-of-thought (CoT) prompting:** A prompting approach that asks for a problem to be handled in staged or stepwise fashion. For user-facing applications, request a clear answer or concise rationale as appropriate; do not depend on exposing private internal reasoning.
- **Tree-of-thought prompting:** A broader prompting approach that explores and compares multiple possible reasoning paths before settling on an answer. Its availability and implementation depend on the model and application.

### Prompt structure example

Keep stable behavior instructions separate from the user's current task, and make the requested output explicit:

```text
System: You are a concise support assistant. Use only the supplied policy context.
If the context does not answer the question, say what information is missing.

Context: <relevant policy passages retrieved for this request>

User: <the user's question>

Output: Answer in plain language. If relevant, identify the policy passage used.
```

This structure clarifies roles and gives the model relevant context. It does not guarantee that the model will follow every instruction, so validate important outputs in the application.

## Practical Takeaways

- Treat an AI feature as a complete application flow, not just a call to a model API.
- Keep orchestration in the backend: protect credentials, enforce access, assemble context, and handle errors there.
- Store only the application data you need, and deliberately choose which history or retrieved passages fit into each request.
- Design for the model's context window and token-based costs from the beginning.
- Select models against representative tasks and measured quality, latency, cost, and operational constraints—not parameter count or benchmarks alone.
- Match sampling settings to the task, then verify the resulting behavior with tests.
- Use clear prompts with explicit roles, relevant context, and an output shape; examples can help when a format is difficult to describe.
- Treat generated content as fallible. Use retrieval, validation, and appropriate safeguards, especially when errors have meaningful consequences.
- Re-test model and prompt changes in the full application: behavior depends on the prompt, selected context, model, settings, and surrounding code.