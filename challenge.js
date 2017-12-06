/**
 * challenge
 * Created by dcorns on 12/5/17
 * Copyright © 2017 Dale Corns
 * MIT Licensed
 */
'use strict';
const data = {
  "status": "OK",
  "ref": "",
  "count": 10,
  "total": null,
  "offset": 0,
  "limit": 10,
  "avg_satisfaction": 6.6,
  "avg_satisfaction_out_of_5": 4.7142857142857,
  "avg_satisfaction_percent": 94.285714285714,
  "recommend_yes": 10,
  "recommend_no": 0,
  "recommend_percent": 100,
  "testimonials": [
    {
      "id": "4685832",
      "testimonial": "Recognition for James Graham who was friendly, enthusiastic and deligent in all aspects of the sale taking the time to explain the features and benefits of all the products that Sherwoods offer customers",
      "author": "Mr Tom Hart",
      "would_recommend": "yes",
      "satisfaction_score": "6",
      "satisfaction_score_out_of_5": 4.2857142857143,
      "satisfaction_percent": 85.71,
      "customer_id": "4340386",
      "survey_id": "1",
      "datetime": "2017-11-13T10:02:14+0000"
    },
    {
      "id": "4636649",
      "testimonial": "They are totally amazing",
      "author": "Ms Angela Logan",
      "would_recommend": "yes",
      "satisfaction_score": "6",
      "satisfaction_score_out_of_5": 4.2857142857143,
      "satisfaction_percent": 85.71,
      "customer_id": "4296463",
      "survey_id": "2",
      "datetime": "2017-10-30T10:46:22+0000"
    },
    {
      "id": "4737188",
      "testimonial": "My experience at Lookers Nissan Gateshead was cracking because l got what I wanted within my budget ",
      "author": "Mr David Taylor",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205758",
      "survey_id": "2",
      "datetime": "2017-10-02T14:52:46+0100"
    },
    {
      "id": "4737179",
      "testimonial": "I had a great experience at Lookers Ford Sheffield because the service was excellent and the support from Russell was fantastic. He was very professional and I trusted what he said form the very first conversation.",
      "author": "Mr Sebastian Zarola",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205113",
      "survey_id": "2",
      "datetime": "2017-10-02T14:51:55+0100"
    },
    {
      "id": "4737183",
      "testimonial": "The experience at Lookers Kia Stockport was good because we came away with a lovely car at a good price. I would have preferred to test drive the car we were interested in rather than a higher spec car which was out of our price range.",
      "author": "Mrs S",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205229",
      "survey_id": "2",
      "datetime": "2017-10-02T14:51:41+0100"
    },
    {
      "id": "4737185",
      "testimonial": "Lookers Land Rover Chipperfield were really helpful and I'd recommend them because the salesman I dealt with was very thorough. The afte sales care was also excellent. ",
      "author": "Mrs B",
      "would_recommend": "yes",
      "satisfaction_score": "6",
      "satisfaction_score_out_of_5": 4.2857142857143,
      "satisfaction_percent": 85.71,
      "customer_id": "4205272",
      "survey_id": "2",
      "datetime": "2017-10-02T14:51:19+0100"
    },
    {
      "id": "4737190",
      "testimonial": "I'd definitely recommend Lookers Nissan Newcastle because I got exactly what I was looking for. ",
      "author": "Mrs Deborah McGuigan",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205782",
      "survey_id": "2",
      "datetime": "2017-10-02T14:50:51+0100"
    },
    {
      "id": "4737181",
      "testimonial": "I had a great experience at Lookers Jaguar Amersham because they had a good range of used vehicles",
      "author": "Mr David Wilson",
      "would_recommend": "yes",
      "satisfaction_score": "6",
      "satisfaction_score_out_of_5": 4.2857142857143,
      "satisfaction_percent": 85.71,
      "customer_id": "4205198",
      "survey_id": "2",
      "datetime": "2017-10-02T14:49:38+0100"
    },
    {
      "id": "4737184",
      "testimonial": "Lookers Land Rover Bishops Stortford were great because of the care and attention received from the sales person Dale Glanvill",
      "author": "Miss Smith",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205247",
      "survey_id": "2",
      "datetime": "2017-10-02T14:49:25+0100"
    },
    {
      "id": "4737180",
      "testimonial": "The staff at Lookers Ford Sheffield were good because they were friendly and courteous and didn't mess me around",
      "author": "Mr Mark Cox",
      "would_recommend": "yes",
      "satisfaction_score": "7",
      "satisfaction_score_out_of_5": 5,
      "satisfaction_percent": 100,
      "customer_id": "4205126",
      "survey_id": "2",
      "datetime": "2017-10-02T14:49:24+0100"
    }
  ]
};

const formatDate = (datetime) => {
  const date = (new Date(datetime).toDateString()).slice(4);
  const month = date.slice(0,3);
  let day = date.slice(4,6);
  if(day[0] === '0') day = day.slice(1);
  const year = date.slice(7);
  return `${month} ${day}, ${year}`;
};

const makeStars = (score) => {
  const numberOfStars = parseInt(score,10);
  let stars = '';
  for(let i=0; i < numberOfStars; i++){
    stars += '<span>&#9733</span>'
  }
  return stars;
};

const changeCards = (e) => {
  const mark = document.getElementById(`mark-${data.offset}`);
  mark.classList.remove('current-marker');
  if(e.target.id === 'arrowRt'){
    if(data.offset < data.count/2-1){
      const hideRecords = document.querySelectorAll(`.record-pair-${data.offset}`);
      hideRecords.forEach((item) => {
        item.classList.add('hide');
      });
      data.offset++;
      const showRecords = document.querySelectorAll(`.record-pair-${data.offset}`);
      showRecords.forEach((item) => {
        item.classList.remove('hide');
      });
    }
  }
  else{
if(data.offset > 0){
  const hideRecords = document.querySelectorAll(`.record-pair-${data.offset}`);
  hideRecords.forEach((item) => {
    item.classList.add('hide');
  });
  data.offset--;
  const showRecords = document.querySelectorAll(`.record-pair-${data.offset}`);
  showRecords.forEach((item) => {
    item.classList.remove('hide');
  });
}
  }
  const currentMark = document.getElementById(`mark-${data.offset}`);
  currentMark.classList.add('current-marker');
};

const reviews = document.getElementById('reviews');
const arrowLt = document.getElementById('arrowLt');
const pageMarker = document.getElementById('page-marker');
const firstMark = document.createElement('span');
firstMark.innerHTML = '&#9724';
firstMark.classList.add('page-marker');
firstMark.classList.add('current-marker');
firstMark.id = 'mark-0';
pageMarker.appendChild(firstMark);
arrowLt.addEventListener('click', changeCards);
let c = 1, f = 1, recordPairNum = 0;
data.testimonials.forEach((item, idx) => {
  if(c === 3){
    c=1;
    recordPairNum++;
    const mark = document.createElement('span');
    mark.innerHTML = '&#9724';
    mark.classList.add('page-marker');
    mark.id = 'mark-' + recordPairNum;
    pageMarker.appendChild(mark);
  }
  const article = document.createElement('article');
  article.classList.add('grid-item-' + c);
  c++;
  const author = document.createElement('div');
  const rating = document.createElement('div');
  rating.innerHTML = makeStars(item.satisfaction_score_out_of_5);
  rating.classList.add('rating');
  const testimonial = document.createElement('div');
  const date = document.createElement('div');
  date.classList.add('date');
  author.textContent = item.author;
  testimonial.textContent = item.testimonial;
  date.textContent = formatDate(item.datetime);
  article.appendChild(author);
  article.appendChild(rating);
  article.appendChild(testimonial);
  article.appendChild(date);
  article.classList.add(`record-pair-${recordPairNum}`);
  if(f > 2) article.classList.add('hide');
  reviews.appendChild(article);
  f++;
});
const arrowRt = document.createElement('div');
arrowRt.innerHTML = '&raquo';
arrowRt.classList.add('arrowRt');
arrowRt.id = 'arrowRt';
arrowRt.addEventListener('click', changeCards);
reviews.appendChild(arrowRt);