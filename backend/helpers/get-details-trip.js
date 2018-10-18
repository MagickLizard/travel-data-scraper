
'use strict'
const scrapeIt = require('scrape-it');

class getDetailsTrip {

    tripAdvisorLocationAddedPromise() {

        scrapeIt("https://www.tripadvisor.com.au/Hotels-g255346-Ballarat_Victoria-Hotels.html", {
            title: ".header h1"
            , desc: ".header h2"
            , avatar: {
                selector: ".header img"
                , attr: "src"
            },
            createdAt: {
                selector: ".date"
                , convert: x => new Date(x)
            },

            // Get the title
            title: "title",

            // Nested list
            tags: ".item"

            // Get the content
            , content: {
                selector: ".popindex"
                , how: "html"
            },
            classes: {
                selector: ".listing_title",
                // selector: ".popindex",
                dir: "ltr",
                how: "html"
            },
            pages: {
                listItem: "li.page"
                , name: "pages"
                , data: {
                    title: "a"
                    , url: {
                        selector: "a"
                        , attr: "href"
                    }
                }
            }
        }).then(({ data, response }) => {
            console.log(`Status Code: ${response.statusCode}`)
            console.log(data)
        })
    }

    tripAdvisorNoLocationType() {

        scrapeIt("https://www.tripadvisor.com.au/Hotels", {
            title: ".header h1"
            , desc: ".header"
            , avatar: {
                selector: ".header img"
                , attr: "src"
            },
            createdAt: {
                selector: ".date"
                , convert: x => new Date(x)
            },

            // Get the title
            title: "title",

            // Nested list
            tags: ".item"

            // Get the content
            , content: {
                selector: ".popIndexText"
                , how: "html"
            },
            classes: {
                selector: ".listing_title",
                selector: ".popindex",
                dir: "ltr",
                how: "html"
            },
        }).then(({ data, response }) => {
            console.log(`Status Code: ${response.statusCode}`)
            console.log(data)
        })
    }
}
module.exports = new getDetailsTrip();

