---
layout: post
title: Word Embeddings (Deep Learning Notes C5W2)
date: 2026-04-08 23:12:00
description: "generation of dense vector representations of words that can capture semantic relationships between words"
tags: machine-learning deep-learning RNN sequence-models
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Sequence Models](https://www.coursera.org/learn/nlp-sequence-models), which is the last part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 2.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

---

## Traditional Word Representation Approaches

#### One-Hot Encoding

So far we have been representing words by **one-hot vectors**. However, the one-hot vectors are high-dimensional (dimension of each vector is equal to the size of the vocabulary), so it is computationally expensive.

Also, one-hot vectors do not capture semantic relationships between words (the inner product between any two one-hot vectors is zero), and such representation does not generalise well to new words (one needs to increase the vocabulary but what the model has learned before tells essentially nothing about the new word).

#### Bag-of-Words (BoW)

**Bag-of-Words** is simple frequency-based representation technique in NLP. The idea is to think of each document as a bag, or a collection, of words, and then we count the **frequency of occurrence** of each word in the document. This provides a straightforward way to capture word importance, but there is loss of sequential information as the order of the words does not matter in vector representation. Also, common words like "the" or "of" tend to dominate the count vector, drowning out rarer but more informative words.

#### TF-IDF

**TF-IDF**, or Term Frequency-Inverse Document Frequency, is an improvement over the BoW representation. The idea is to increase the importance of rare words while reducing the weight of common words by considering the two factors:

- TF (term frequency): measures how frequent a particular word appears in a particular document, a word that appears many times in a document is assumed to be important to that document
  
  $$
  \text{TF} = \frac{\text{frequency that the word appears in this document}}{\text{total number of words in this document}}
  $$

- IDF (inverse document frequency): measures the importance of a particular word across all documents, a word that appears in only a few documents would be more informative than those appear in many documents
  
  $$
  \text{IDF} = \log \left( \frac{\text{total number of documents}}{\text{number of documents that contain this word} + 1}\right)
  $$

The **TF-IDF score** of a particular word in a particular document is given by:

$$
\text{TF-IDF} = \text{TF} \times \text{IDF}
$$

For the common words which appear in almost all documents, their IDF score would be equal or close to zero, making their TF-IDF score low, which suggests that they are less important as desired. Rarer words such as technical terminologies would have higher TF-IDF scores, which can be useful in information retrieval and text analysis tasks.

#### Limitations of Traditional Word Representation Approaches

One major problem with traditional word representation methods is that they do not reflect any relationship between the words, so it is quite unlikely for the model to understand analogies like a man is to a woman as a boy is to a girl or a king is to a queen.

Such limitation motivated the development of **word embedding**,  an technique in natural language processing that converts words into dense vectors (dimension of the vector $$\ll$$​ size of the vocabulary), mapping semantic meaning into vectors consisting of continuous real numbers. This allows the models to better capture semantic relationships and syntactic information.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/semantic_relations.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

The word embeddings can be trained in an **unsupervised** manner using very large corpus and be reused for specific tasks. Suppose we want to train an RNN to recognize names in a given sentence, the model will be able to generalize more easily if we use word embeddings as inputs instead of the one-hot vectors. Even if the model sees a new word for the first time, for example say tuna, the model would know it is a fish as its word representation is similar to already seen examples like cod or salmon. Therefore, it is possible to take the learned embeddings and fine tune them for new tasks (a form of transfer learning).


## Learning Word Embeddings

#### Similarity Functions

Given two word vectors $$\mathbf{u}$$ and $$\mathbf{v}$$, the simplest possible similarity function between two word vectors is the **Euclidean distance**:

$$
\text{EuclideanDistance}(\mathbf{u}, \mathbf{v}) = \lVert \mathbf{u} - \mathbf{v} \rVert = \sqrt{\sum_{i=1}^D (u_i - v_i)^2}
$$

Another commonly-used similarity function is the **cosine similarity**:

$$
\text{CosineSimilarity}(\mathbf{u}, \mathbf{v}) = \cos \theta(\mathbf{u} ,\mathbf{v}) = \frac{\mathbf{u}  \cdot \mathbf{v}}{\lVert \mathbf{u}  \rVert \lVert \mathbf{v} \rVert}
$$

where $$\theta(\mathbf{u} ,\mathbf{v})$$ is the angle between $$\mathbf{u}$$ and $$\mathbf{v}$$. If two words are strongly correlated, then their representations would be close in the vector space, which means the angle is small so their cosine similarity is close to 1. If two words are unrelated, then due to the sparse nature of the high-dimensional vector space, their representations are almost orthogonal so their cosine similarity would be equal or very close to 0.

#### Embedding Matrix

An **embedding matrix** serves as a lookup table that maps one-hot word vectors to continuous word embeddings. Let's denote the embedding matrix by $$E$$, the one-hot vector for the $$j$$-th word in the vocabulary by $$\mathbf{o}_j$$, then the word embedding $$\mathbf{e}_j$$ for this word is given by:

$$
\mathbf{e}_j = E \mathbf{o}_j
$$

Suppose we are using a vocabulary of $$V$$ words and we want to learn a $$d$$-dimensional word embedding, then the embedding matrix $$E$$ is of size $$d \times V$$.

The task of learning a good word embedding is therefore to learn the embedding matrix $$E$$. One may initialize the embedding matrix randomly and apply gradient descent to make improvements towards optimum.

It is also worth mentioning that it is not necessary to use vector multiplication to extract word embeddings. Given the $$j$$-th one-hot vector $$\mathbf{o}_j$$, due to the one-hot nature (1 in the $$j$$-th row and 0's elsewhere) , the word embedding $$\mathbf{e}_j = E \mathbf{o}_j$$ is simply the $$j$$-th column of the embedding matrix $$E$$, so in practice we can use slicing to obtain the desired column for the embeddings instead of doing the vector multiplication.

#### Learning Word Embeddings: An Intuitive Approach

Suppose we want to build a language model to predict the next word in a sequence. We would first embed the input word with the embedding matrix: $$\mathbf{e}_j = E \mathbf{o}_j$$. The embedding is then fed into a two-layer neural network: first a hidden layer, and then a SoftMax layer to output the predicted probability over $$V$$ words in the vocabulary.

The input words could be the last one word, or the last $$k$$ words, and so on. The goal is to optimize the embedding matrix $$E$$ and layer parameters of the neural network in order to maximize the likelihood to predict the next word given the input contexts.


## Case Study: Word2vec

Let's first look at **Word2vec**, a technique to learn a meaningful word embedding in natural language processing.

#### Continuous Bag-of-Words (CBOW) Model

The **Continuous Bag-of-Words** model is designed to predict predict the target word based on the $$k$$ context words on both sides. For example, given the sentence "I want a glass of orange juice to go along with my cereal", and if we are using a window of size $$k=2$$, we would like the model to predict the target word "orange" given the context words "glass", "of", "juice" and "to".

For a desired target word `t`, the CBOW model does the following:

- compute the embeddings of each of the $$2k$$ context words: $$\displaystyle \mathbf{e}_{\text{c}_i} = E \mathbf{o}_{\text{c}_i} \; (i=-k,\cdots,-1,+1,\cdots,+k)$$
- take average of these embeddings to give a single vector: $$\displaystyle \bar{\mathbf{e}}_\text{c} = \frac{1}{2k}\sum_i \mathbf{e}_{\text{c}_i}$$

- predict the target word with SoftMax: $$\displaystyle \hat{y} = P(\text{t} \vert \text{c}) = \frac{\mathrm{e}^{\theta_\text{t}^T \bar{\mathbf{e}}_\text{c}}}{\sum_{j=1}^V \mathrm{e}^{\theta_j^T \bar{\mathbf{e}}_\text{c}}}$$
- use cross-entropy to evaluate the loss: $$\displaystyle L(\hat{y}, y) = -\sum_{i=1}^V y_i \log \hat{y}$$


#### Skip-Gram Model

In practice, researchers found that inverting the CBOW objective (using surrounding words to predict one target word), that is to take a single word and predict its surrounding words, yields equally meaningful word embeddings. This is the idea of the **skip-gram model**, simple but works remarkably well.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/word2vec.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

Typically, a window of fixed size ($$\pm 5$$ words for example) is chosen, and for a specific context word, a target word is sampled uniformly from within that window. That makes a context-target pair for training. For example, given the sentence "I want a glass of orange juice to go along with my cereal",  and if we take "orange" as the context word (input), we want the model to predict target words "juice", "glass", "want", "my", "cereal", etc. 

Suppose the context word is `c` and the target word is `t` so we want the model to predict `t` given `c`. The skip-gram model does the following

- compute embedding of the context word: $$\mathbf{e}_\text{c} = E \mathbf{o}_\text{c}$$
- use a SoftMax layer to predict: $$\displaystyle \hat{y} = P(\text{t} \vert \text{c}) = \frac{\mathrm{e}^{\theta_\text{t}^T \mathbf{e}_\text{c}}}{\sum_{j=1}^V \mathrm{e}^{\theta_j^T \mathbf{e}_\text{c}}}$$
- use cross-entropy to evaluate the loss: $$\displaystyle L(\hat{y}, y) = -\sum_{i=1}^V y_i \log \hat{y}$$


#### Problem at the SoftMax Layer

One problem with both the CBOW model and the skip-gram model is the efficiency at the SoftMax layer. Since we need to sum over all the words in the vocabulary to evaluate the probability of each word, this could be very slow and even slower if we use bigger vocabularies.

One solution to this problem is to use a **hierarchical SoftMax classifier** which works as a tree classifier. The hierarchical SoftMax classifier uses an asymmetrical tree to reduce the computations, where common words tend to be at the top and less common words are deeper down near the bottom.


#### Negative Sampling

One training technique that optimizes the efficiency for training word embedding models is **negative sampling**. By learning from a positive sample and a small number of negative samples, we can convert a slow multi-classification task into a fast binary classification task.

We construct the training examples as the following. For the positive sample, we pick a context word and a nearby word as the target . For negative samples associated with the same context word, we choose the target word randomly. For each positive sample we can choose $$k$$ negatives ($$k=5\sim20$$ for smaller datasets, and $$k=2\sim5$$ for larger datasets).

For each sample, we apply a simple logistic regression model to predict

$$
\hat{y} = P(y=1 | \text{c}, \text{t}) = \sigma(\theta_\text{t}^T \mathbf{e}_\text{c})
$$

So instead of having a $$V$$-dimensional classification problem ($$V$$ being the vocabulary size), we only need to train $$k+1$$ classifiers in each iteration. The model only needs to update a small subset of weights at a time instead of updating the weights for the entire vocabulary, so the model converges faster, making it feasible to large datasets.


#### Selection of Samples

If we sample randomly, we are actually taking samples according to the empirical frequency at which different words appear in  a corpus, this means we would have sampled more frequent words like "the", "of", etc.

One solution to this problem is to sample according to the frequency-based probability for a given word. Let $$f(w_i)$$ be the frequency that the word $$w_i$$ appears, then the probability of sampling this word is:

$$
P(w_i) = \frac{f(w_i)^{\alpha}}{\sum_{j=1}^V f(w_j)^\alpha}
$$

where $$\alpha<1$$ is a hyperparameter to suppress the probability of very frequent words but raise the probability of rarer words. Andrew suggests that choosing $$\alpha = \frac{3}{4}$$ gives nice results.



## Case Study: GloVe

**GloVe**, or Global Vectors for Word Representation, is another algorithm to learn a word embedding. While Word2Vec uses local context windows, GloVe uses global **co-occurrence statistics**. The main idea behind the GloVe approach is to capture semantic relationships between words by analysing the co-occurrence patterns, i.e., how often a pair of words appear together, in a large corpus.

To learn a word embedding with GloVe, we first build a co-occurrence matrix $$X$$ where the matrix element $$X_{ij}$$ counts the number of times that a word $$w_j$$ appears in the surrounding context of word $$w_i$$ (usually within a window of fixed size around the word).

Since the dot product of two word vectors reflects their correlation as in their cosine similarity, so we want to adjust the vectors so that their dot product correctly reflect the relationship between words as described by the co-occurrence matrix elements. The **GloVe cost function** to be minimized is therefore designed to be the difference between the dot product of two word vectors and the logarithm of their co-occurrence probability:

$$
J = \sum_{i,j=1}^V f(X_{ij}) \left(e_i^T e_j + b_i + b_j' - \log X_{ij} \right)^2
$$

where $$b_i$$, $$b_j'$$ are bias terms for the words $$w_i$$ and $$w_j$$. A specialised function $$f(X_{ij})$$ is introduced to ensure that word pairs like "this is" or "we can" with extremely high co-occurrence are not over-weighted. The authors of GloVe suggests the function:

$$
f(x) = \left\{ \begin{array}{cl}
0 & \text{if } x=0 \\
\left(\frac{x}{x_\text{max}}\right)^\alpha & \text{if } 0 < x < x_\text{max} \\
1 & \text{if } x \geq x_\text{max}
\end{array} \right.
$$

with $$\alpha = \frac{3}{4}$$ and $$x_\text{max} = 100$$ determined empirically.

Note that $$f(0)=0$$, this means words that do not co-occur ($$X_{ij}=0$$) are simply ignored by the cost function (no need to worry about potential issue with ill-defined $$\log 0$$), and so GloVe trains only positive samples in contrast to Word2Vec with negative sampling.


## Properties of Word Embeddings: Analogical Reasoning

One striking property of learned word embeddings is their ability to capture semantic and syntactic analogies through simple vector arithmetic. Since words that behave similarly in a corpus, i.e., words that often appear near similar neighbours, end up with similar embeddings. Consistent relationships across word pairs are encoded as consistent directions in the embedding space. Some well-known examples include:

- gender: $$\mathbf{e}_{\text{king}} - \mathbf{e}_{\text{queen}} \approx \mathbf{e}_{\text{man}} - \mathbf{e}_{\text{woman}}$$
- pluralisation: $$\mathbf{e}_{\text{cats}} - \mathbf{e}_{\text{cat}} \approx \mathbf{e}_{\text{dogs}} - \mathbf{e}_{\text{dog}}$$
- verb tenses: $$\mathbf{e}_{\text{walked}} - \mathbf{e}_{\text{walk}} \approx \mathbf{e}_{\text{ran}} - \mathbf{e}_{\text{run}}$$
- capital cities: $$\mathbf{e}_{\text{France}} - \mathbf{e}_{\text{Paris}} \approx \mathbf{e}_{\text{China}} - \mathbf{e}_{\text{Beijing}}$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/embedding_space_analogies.jpeg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
