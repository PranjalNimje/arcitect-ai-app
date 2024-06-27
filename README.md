### `npm start`

############################################################################

npx create-react-app architect-ai-project --template typescript
cd architect-ai-project
created json file -ai-data.json
npm install -g json-server
npm run json:server
npm install react-redux
npm install @reduxjs/toolkit
npm install react-router-dom
npm i bootstrap@5.3.3
npm i bootstrap-icons
npm install -g sass
npm i sass --save-dev
npm install chart.js react-chartjs-2

Endpoints:
http://localhost:4000/insight_summary
http://localhost:4000/category_distribution
http://localhost:4000/response_times
http://localhost:4000/user_satisfaction
http://localhost:4000/usage_statistics

// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

## Steps To run this application in your system:

Download zip from github
npm install
npm run json:server
npm start

## Explanation

# 1.

We have a single api that running on json server :
http://localhost:4000/

But I am calling api for selected data only.
Suppose if we click on Insight summary card button , this api will be called :
http://localhost:4000/insight_summary

# 2.

I have used chart.js react-chartjs-2 for data visualization.

# 3.

On home page, we can select which data we want to view :
insight_summary, response_times, category_distribution, usage_statistics, user_satisfaction
It will show the data in different charts.

# 4.

The application is responsive across various media screens.

# 5.

I have also given routing , so when u open a card, suppose Insight summary,
It will route to http://localhost:3000/insight_summary
Back button is also available.

# 6.

Made reusable components like - Loader, Header, Heading, all charts.

# 7.

I have made a custom hook which wwill fetch the data from api for selected category :
insight_summary, response_times, category_distribution, usage_statistics, user_satisfaction.

In the component, we are getting that data. After the data is received we are setting the chartData using api data, For some categories we have two charts as well.

We are also adding those data to redux store if we might need it in other components.
