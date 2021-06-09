"use strict";
require("dotenv").config();
const { google } = require("googleapis");

exports.searchVideos = async (req, res, next) => {
  const { searchString, maxResults } = req.query;
  const { APIKEY_YT } = process.env;

  if (!searchString || !maxResults) {
    res.status(400).json({
      message: "Invalid request!, be sure what data you are sending us!",
      status: 400,
    });

    return;
  }

  const response = await google.youtube("v3").search.list({
    key: APIKEY_YT,
    part: "snippet",
    q: searchString,
    maxResults,
  });
  const { data, status } = response;
  const { items } = data;
  let _videoArr = [];
  items.forEach((item) => {
    _videoArr.push({
      thumbnails: item.snippet.thumbnails["medium"],
      title: item.snippet.title,
      description: `${item.snippet.description.slice(0, 160)}...`,
    });
  });

  res.status(status).json({
    data: _videoArr,
    status,
  });
};
