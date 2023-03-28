/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for t`he specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    env: {
        MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
        AUTH_BASE_URL: process.env.AUTH_BASE_URL,
        DIGIO_BASE_URL: process.env.DIGIO_BASE_URL,
        PORTFOLIO_BASE_URL: process.env.PORTFOLIO_BASE_URL,
        LOANS_BASE_URL: process.env.LOANS_BASE_URL,
        FIREBASE_BASE_URL: process.env.FIREBASE_BASE_URL,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        DATABASE_URL: process.env.DATABASE_URL,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID
    }
};
