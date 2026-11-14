# AI Foundations, History & Terminology

> A practical introduction to what artificial intelligence is, how it developed, and the concepts developers need to understand when building AI-powered applications.

## Module Overview

Artificial intelligence (AI) is not magic, and it is not limited to chatbots. It describes techniques that let computers perform tasks associated with intelligence, such as recognizing patterns, making predictions, generating content, and supporting decisions.

AI systems use software, hardware, data, algorithms, and mathematical models. They do not think exactly like people: their capabilities depend on the task, the information they receive, and the patterns learned from data. Even highly capable AI is one part of a software application—not a replacement for its interface, backend, database, validation, testing, or user experience.

By the end of this module, you should be able to:

- Describe intelligence and distinguish natural from artificial intelligence.
- Summarize key milestones in the history of AI.
- Explain how AI, machine learning, deep learning, and generative AI relate.
- Define common model, language-model, and application-development terms.
- Recognize why model outputs need to be checked and tested.

## Key Concepts

### Intelligence and AI

Intelligence involves understanding a situation, connecting information, learning from experience, and solving problems to achieve a goal. It is more than memorizing facts: it also includes adapting when circumstances change.

**Natural intelligence** is found in humans and animals. It draws on biology, senses, memory, emotion, creativity, social understanding, and experience.

**Artificial intelligence** is the simulation of intelligent behavior by machines. AI systems use data, algorithms, and mathematical models to perform tasks such as recognizing images, understanding language, making recommendations, or generating code.

AI can be powerful at a defined task while lacking the flexible, general understanding people bring to unfamiliar situations.

### How the Fields Relate

The module presents these fields as nested areas of study:

```text
Artificial Intelligence (AI)
└── Machine Learning (ML)
    └── Deep Learning (DL)
        └── Generative AI
```

- **AI** is the broad field of methods that enable computers to perform tasks associated with intelligence. It includes both rule-based systems and systems that learn from data.
- **Machine learning** is an approach to AI in which a system learns patterns from examples rather than relying only on rules written by developers.
- **Deep learning** is a type of machine learning that uses neural networks with many layers to learn complex patterns, particularly from images, audio, text, and video.
- **Generative AI** uses learned patterns to create new content, including text, images, audio, and code.

These categories describe the module's learning framework; they are related concepts, not interchangeable terms.

### Rule-Based Systems and Learning from Data

Early AI systems often relied on explicit **if–then rules** and hand-coded knowledge. These methods can work well for clearly defined tasks, but real-world situations are full of exceptions that are difficult to enumerate.

Machine learning takes a different approach: developers provide data and examples, and a model learns patterns that can be applied to new inputs. A classification system, for example, might label an email as spam; a generative system might instead draft a new email.

### Discriminative and Generative Systems

- **Discriminative systems** analyze or classify existing information—for example, predicting whether an image contains a cat or a dog.
- **Generative systems** use learned patterns to produce new information—for example, creating an image from a text prompt or drafting an explanation.

Generative AI can create new output, but generated content should not be treated as verified fact.

### Neural Networks and Transformers

A **neural network** is a computational model made of connected units arranged in layers. Deep learning uses networks with many layers to learn complex patterns from data.

The **Transformer** architecture was introduced in Google's 2017 paper *Attention Is All You Need*. Its attention mechanism helps models process relationships and context across a sequence of text. Transformers became a foundation for many modern large language models (LLMs); the “T” in GPT stands for **Transformer**.

For example, context helps distinguish the meaning of “bank” in “The bank was closed because the river overflowed” from a financial institution.

## Historical Milestones

| Period | Milestone | Why it matters |
| --- | --- | --- |
| **1950** | Alan Turing proposed the “Imitation Game,” later known as the Turing Test, as a way to consider whether a machine's conversation could be distinguished from a human's. | It gave the emerging field a landmark question about machine intelligence. |
| **1956** | The term **artificial intelligence** was introduced at the Dartmouth Conference. Early researchers explored symbolic AI: representing reasoning and knowledge with hand-written rules. | AI became a formal research field, accompanied by strong early optimism. |
| **Rule-based era** | Researchers built systems around logic, expert knowledge, and if–then rules. | These approaches could solve narrow, well-defined problems but struggled with complex, unpredictable situations. |
| **AI winters** | Periods of unmet expectations and technical limitations led to reduced funding and activity. | The downturns showed that ambitious goals could not be achieved through hand-written rules and limited computing alone. |
| **2010s** | More digital data and more capable GPUs enabled the growth of deep learning and neural networks. | Models could learn complex patterns at scale, contributing to progress in image recognition, speech, translation, and recommendations. |
| **2017** | The Transformer architecture introduced a more effective way to model relationships and context in sequences. | Transformers became a foundation for many modern language models and generative AI tools. |
| **Modern AI applications** | Developers gained access to capable models through hosted services and APIs. | AI features can now be integrated into everyday software without every application training its own model. |

## Core Terminology

### Data, Training, and Models

| Term | Definition |
| --- | --- |
| **Algorithm** | A method or set of steps used to process information or solve a problem. |
| **Training data** | Examples used to help a machine-learning system learn patterns. |
| **Training** | The process of adjusting a model based on data so it can perform a task. |
| **Model** | The learned result of training, used to process new input and produce an output. A model is not the same thing as the algorithm, application, or API. |
| **Inference** | Using a trained model to process new input and return a prediction or generated response. |
| **Neural network** | A model made of connected computational units organized into layers; deep learning uses networks with many layers. |
| **Prompt** | Instructions or input provided to a model to guide its response. |
| **API** | An interface an application can use to send requests to a service, such as a hosted model, and receive responses. |

A useful analogy is a student preparing for an exam: **training** is studying examples, the **model** is the knowledge developed from that study, and **inference** is using that knowledge to answer a new question. When an application calls a hosted model API, the provider runs the model and returns its output.

### Model Types and Capabilities

| Term | Definition |
| --- | --- |
| **Foundation model** | A model trained on broad data that can serve as a base for many tasks, with guidance from prompts, tools, retrieved data, or fine-tuning. |
| **Large language model (LLM)** | A model designed to work with text and code. Common uses include chat, summarization, tutoring, coding assistance, and document question-answering. |
| **Vision model** | A model that processes images or video, for tasks such as image analysis and object detection. |
| **Audio model** | A model that processes speech or sound, for tasks such as transcription or voice assistance. |
| **Multimodal model** | A model that works with more than one type of information, such as text and images or audio. |
| **ANI (Artificial Narrow Intelligence)** | AI specialized for one task or a limited group of tasks. This describes nearly all deployed AI systems today, including LLM-based tools. |
| **AGI (Artificial General Intelligence)** | A theoretical level of AI capable of adapting across the breadth of intellectual tasks a human can perform. |
| **ASI (Artificial Superintelligence)** | A speculative concept describing AI that surpasses human abilities across intellectual domains. |

AGI and ASI are concepts about possible future capabilities, not descriptions of current systems. Human-like language alone does not demonstrate human common sense, self-awareness, or understanding.

### Language-Model Terms

| Term | Definition |
| --- | --- |
| **Next-token prediction** | The process an LLM uses to generate output: it estimates a likely next token from the prompt and previous tokens, then repeats. |
| **Token** | A piece of text processed by a language model. A token may be a whole word, part of a word, punctuation, or a space. |
| **Context window** | The amount of information a model can consider in one request, including instructions, the current input, conversation history, examples, retrieved content, and sometimes tool outputs. |
| **Temperature** | A setting that affects how predictable or varied a model's token choices are. Lower values tend to produce more consistent responses; higher values allow more variation. |
| **Hallucination** | An output that sounds plausible or confident but is incorrect, invented, or unsupported. |

Tokens affect usage and performance: longer prompts and responses can use more tokens, increase cost, and take more time. The context window is not persistent memory; an application must provide relevant history or store and retrieve it separately when needed.

> **Important:** An LLM generates likely text based on learned patterns; it does not verify claims like a database. Check important answers, facts, package names, functions, and APIs against reliable sources and tests.

## From AI Model to Application

An AI-enabled feature is part of a larger application flow:

```text
User interface
      ↓
Application backend — validates input and builds a prompt
      ↓
Model service or API — processes the request
      ↓
Backend — checks and handles the model response
      ↓
User interface — presents the result
```

Depending on the feature, an application may also use a database to store user data or conversation history and retrieve relevant information for a request. Developers design the surrounding interface, backend flow, data handling, prompts, validation, testing, and user experience.

## Summary and Takeaways

- AI is a broad field—not just chatbots—and includes both rule-based methods and learning-based systems.
- The module's conceptual hierarchy is **AI → machine learning → deep learning → generative AI**.
- AI research moved from rule-based approaches through periods of reduced investment to deep learning and Transformer-based systems.
- Training produces a model; inference uses that model on new input.
- LLMs generate text token by token, within a context window and under settings such as temperature.
- Almost all AI in use today is narrow and task-dependent; AGI and ASI remain theoretical concepts.
- AI output can be wrong even when it sounds confident. Verify results and understand code before relying on them.
- A successful AI feature still needs good application design, data handling, validation, testing, and human judgment.

### Next Steps

As you continue learning, practice identifying which part of an application is handled by the model and which parts remain ordinary software engineering. Experiment with prompts and model outputs, check their limitations, and test the complete feature before trusting it.