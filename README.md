# 🚀 AI-Driven Hyper-Personalization & Recommendation

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
This project is an innovative financial recommendation platform designed to provide personalized product suggestions and insights for bank customers. By leveraging advanced machine learning techniques, natural language processing, and comprehensive data analysis, the system aims to enhance customer experience and financial product matching.

## 🎥 Demo
![Demo Video]([https://raw.githubusercontent.com/ewfx/aidhp-advaita-ai/blob/main/artifacts/demo/Hackathon%20Recording.mov])

## 💡 Inspiration
In today’s digital era, customer expectations have evolved significantly. People no longer settle for generic recommendations; they seek experiences tailored to their unique preferences, behaviors, and needs. Businesses that fail to deliver hyper-personalized experiences risk losing customer engagement and loyalty.

The rise of Generative AI presents a transformative opportunity to bridge this gap. With its ability to analyze vast amounts of data—customer profiles, social media interactions, purchase history, sentiment analysis, and demographics—AI can generate highly customized recommendations that resonate with individual users.


## ⚙️ What It Does
The Bank Product Recommendation System provides several key functionalities:

1. **Customer Profile Analysis**
   - Retrieves comprehensive customer information
   - Combines customer profiles with social media data
   - Generates detailed profile summaries using AI

2. **Product Recommendations**
   - Uses semantic similarity to match customer needs with bank products
   - Generates personalized product suggestions
   - Provides detailed reasoning for each recommendation

3. **Transaction Insights**
   - Analyzes customer transaction history
   - Predicts future transaction amounts
   - Generates transaction behavior insights

4. **Product Optimization**
   - Offers suggestions for improving existing bank products
   - Uses AI to generate specific, actionable recommendations

## 🛠️ How We Built It
1. **Data Management**
   - Utilized JSON files for storing customer, product, and transaction data
   - Implemented services to load and process data dynamically

2. **Machine Learning Components**
   - Used SentenceTransformer for semantic product matching
   - Implemented a predictive transaction model using scikit-learn
   - Leveraged pre-trained machine learning models

3. **AI-Powered Analysis**
   - Integrated OpenAI-compatible LLM (Llama 3.1 70B) for natural language processing
   - Created sophisticated prompts for generating insights
   - Implemented robust JSON parsing and cleaning mechanisms

4. **API Development**
   - Used FastAPI for creating a robust, scalable web service
   - Implemented CORS middleware for cross-origin compatibility
   - Created endpoints for various functionalities

5. **Dashboard Development**
   - Used React for creating an engaging dashboard
   - Implemented Charts using ReCharts

## 🚧 Challenges We Faced
  - Data Collection & Integration
  - Maintaining low turnaround time
  - Running computation heavy LLMs
  - Choosing the right models


## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/aidhp-advaita-ai.git
   ```
2. Install dependencies  
   ```sh
   For Backend Server

   cd ./code/src/Backend/backendCode
   pip install -r requirements.txt

   For Client

   cd ./code/src/Client/clientCode
   npm i

   ```
3. Run the project  
   ```sh
   For Backend Server

   cd ./code/src/Backend/backendCode
   uvicorn src.main:app --reload

   For Client

   cd ./code/src/Client/clientCode
   npm start

   ```

## 🏗️ Tech Stack
- 🔹 Frontend: React 
- 🔹 Backend: FastAPI
- 🔹 Other: OpenAI-compatible LLM (Llama 3.1 70B)

## 👥 Team
- **GURKARAN SINGH** - [GitHub](https://github.com/GKS02) | [LinkedIn](https://www.linkedin.com/in/gurkaran-singh-392636201/)
- **NIKET BAHETY** - [GitHub](https://github.com/NiketBahety) | [LinkedIn](https://www.linkedin.com/in/niket-bahety/)
- **SIMEET NAYAN** - [GitHub](https://github.com/simeetnayan81) | [LinkedIn](https://www.linkedin.com/in/simeetnayan/)
- **ANSHIKA DIXIT** - [GitHub](https://github.com/anshika236) | [LinkedIn](https://www.linkedin.com/in/dixtanshika/)
