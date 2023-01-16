# Budtender-AI21-hackathon
AI21 version of the Cash'd budtender strain suggester

## About Budtender

### How It Was Built:

This project is built on top of the Buildspace starter template for their [build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer) project.

This deployment of my Cash'd [strain suggester](https://cashd-app-next-version-production.up.railway.app/) uses a Chat GPT3 zero shot prompt and completion through the Open AI API. 

For this project, I am combining these two starting points and adding the following as new work:

1. Building a new version of the Buildspace project: I will be using some code from the [open source tutorial](https://github.com/buildspace/buildspace-projects/tree/main/GPT3_Writer/en) 

2. Using prompt and completion pairs from my existing Chat GPT3 powered app and using them to do few shot prompt engineering on the AI21 Studio Jurassic models

3. Switch out the API call for the strain suggestions from OpenAI to AI21 API

4. Dependent upon time: investigate turning this from a single text input to a chatbot

5. Dependent upon time: would like to experiment with training a J1 model; however, I've been unsucessful thus far in loading a dataset

### Tech stack
NextJS/React
Chat GPT3 (using prompts and completions from my existing app)
AI21 Studio (few shot learning on J1-Grande-instruct)

### Process
1. First prompt:completion pairs from the existing GPT3 app were fed to the AI21 J1-grande-instruct in a [few shot training](https://studio.ai21.com/playground/complete?promptShare=bfbd00bb-333c-4362-97d4-31d24c1a3dd3) style. Then, J1 was used to return a series of recommendations and the best generated prompt:completion pairs were used to tweak the few shot prompt. 

2. A prompt:completion dataset with my fav combos was created
