
import errors from '../utils/errors';

const apiKey = '4a7a248c78514b428b52fa089491fac7';
const url_us = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const url_ctgr = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

class UrlBuilder {
  constructor(baseUrl) {
    this.url = new URL(baseUrl);
    this.url.searchParams.append('apiKey', apiKey);
  }

  addQueryParam(key, value) {
    this.url.searchParams.append(key, value);
    return this;
  }

  build() {
    return this.url.toString();
  }
}

const getData = async () => {
  try {
    const response = await fetch(url_us);
    if (!response.ok) {
      throw new Error(errors.netError);
    }
    const data = await response.json();
    /*     data.articles.forEach(article => {
            console.log(article.author);
          });  */

    return data;

  } catch (error) {
    console.error(errors.fetchError);
  }
};
const getDataByCategory = async ({item}) => {
  try {
    const response = await fetch(url_ctgr+`category=${item}`);
    if (!response.ok) {
      throw new Error(errors.netError);
    }
    const data = await response.json();
   console.log(data)
    return data;

  } catch (error) {
    console.error(errors.fetchError);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(url_ctgr);
    if (!response.ok) {
      throw new Error(errors.netError);
    }
    const data = await response.json();
    category = data.sources.map(sources => sources.category);
    const uniqueCategories = [...new Set(category)];
  
  /*        uniqueCategories.forEach(x=>console.log(x))  */
    return uniqueCategories
  } catch (error) {
    console.error(errors.fetchError);
  }
};

export { getData, getCategories ,getDataByCategory};