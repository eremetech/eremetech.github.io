import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const ResearchPage = ({ data, location }) => {
  const siteTitle = ''

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link to='/'> home </Link>
          <Link className="selected" to="/research">research</Link>
          <Link to="/projects">projects</Link>
          <Link to="/whatif">parallel universe</Link>
        </div>
        <h3> research </h3>
       
        
        <div className="research-container">
          <div className="research-card">
            <div className="research-title">
              <a href="" target="_blank"><strong>Complexity is complex: Metric-driven iterative text simplification via LLMs </strong></a>
            </div>
            <p className="research-authors">
            <strong>Mariia Eremeeva</strong>, Donya Rooein, Sankalan Pal Chowdhury, Mrinmaya Sachan
            </p>
            <p className="research-status">
              <i>Preprint</i>
            </p>
            <p className="research-abstract">
              <strong>Abstract:</strong> This project focuses on a holistic, metric-based view of complexity with the aim to enable effective LLM-based complexity adjustments.
            </p>
          </div>
        </div>
        <div className="research-container">
          <div className="research-card">
            <div className="research-title">
              <a href="https://arxiv.org/abs/2601.08402" target="_blank"><strong>PATS: Personality-Aware Teaching Strategies with Large Language Model Tutors</strong></a>
            </div>
            <p className="research-authors">
              Donya Rooein*, Sankalan Pal Chowdhury*, <strong>Mariia Eremeeva</strong>, Yuan Qin, Debora Nozza, Mrinmaya Sachan, Dirk Hovy
            </p>
            <p className="research-status">
              <i>Preprint</i>
            </p>
            <p className="research-abstract">
              <strong>Abstract:</strong> PATS is a framework for developing personality-aware teaching strategies with large language model tutors. The work explores how different personality traits can be leveraged to create more effective and personalized educational experiences.
            </p>
          </div>
        </div>
        <div className="research-container">
          <div className="research-card">
            <div className="research-title">
              <a href="https://github.com/mashaprostotak/yakut_tok/tree/master" target="_blank"><strong>Tokenization Matters: Improving Low-Resource Language Modeling for Yakut with Custom Tokenizer</strong></a>
            </div>
            <p className="research-authors">
            <strong>Mariia Eremeeva*</strong>, Abu Bakr Rahman Shaik*, Rada Kamysheva*, Nishant Kumar Singh*
            </p>
            <p className="research-status">
              <i>Preprint</i>
            </p>
            <p className="research-abstract">
              <strong>Abstract:</strong>  In this work, we address these limitations for Yakut (Sakha), a Turkic language with Cyrillic orthography, by engineering a Byte Pair Encoding (BPE) tokenizer with Yakut-specific preand postprocessing rules and tailored special tokens.
            </p>
          </div>
        </div>
        <div className="research-container">
          <div className="research-card">
            <div className="research-title">
              <a href="https://github.com/mashaprostotak/sentiment_challenge/tree/main" target="_blank"><strong>BERTweetConvFusionNet: Enhancing BERTweet for Twitter Text Sentiment Classification</strong></a>
            </div>
            <p className="research-authors">
              Debeshee Das*, <strong>Mariia Eremeeva*</strong>, Piyushi Goyal*, Laura Schulz*
            </p>
            <p className="research-status">
              <i>Preprint</i>
            </p>
            <p className="research-abstract">
              <strong>Abstract:</strong> This paper proposes a novel deep-learning based solution for Twitter sentiment analysis that addresses the challenges of automatic and noisily labelled data. Leveraging the pre-trained BERTweet model for embeddings, we develop a novel CRNN-based ‘fusion net’ architecture combining CNN, RNN, and Attention layers
            </p>
          </div>
        </div>
        <div>
          <p className="highlight">
            <br/>* denotes equal contribution. 
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ResearchPage



