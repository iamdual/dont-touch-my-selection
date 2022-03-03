#!/bin/bash
cd firefox && zip -r ../dtms-firefox.zip . -x "**/.DS_Store" && cd ..
cd chrome && zip -r ../dtms-chrome.zip . -x "**/.DS_Store" && cd ..
