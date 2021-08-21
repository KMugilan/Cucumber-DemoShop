$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoApplication.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Demo Application - I want to serach a product in the Product details screen and Add to Cart",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DemoShopApplication"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify_the_customer_add_a_products_in_the_wishlist",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-customer-add-a-products-in-the-wishlist",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I add \"\u003cproduct_count\u003e\" different product to my wish list",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I view my wishlist table",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I find total \"\u003cproduct_count\u003e\" selected items in my Wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-customer-add-a-products-in-the-wishlist;",
  "rows": [
    {
      "cells": [
        "TC_ID",
        "product_count"
      ],
      "line": 11,
      "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-customer-add-a-products-in-the-wishlist;;1"
    },
    {
      "cells": [
        "001",
        "4"
      ],
      "line": 12,
      "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-customer-add-a-products-in-the-wishlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7044332500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify_the_customer_add_a_products_in_the_wishlist",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-customer-add-a-products-in-the-wishlist;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC001"
    },
    {
      "line": 1,
      "name": "@DemoShopApplication"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I add \"4\" different product to my wish list",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I view my wishlist table",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I find total \"4\" selected items in my Wishlist",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "DemoApplicationSteps.i_add_different_product_to_my_wish_list(String)"
});
formatter.result({
  "duration": 14141224800,
  "status": "passed"
});
formatter.match({
  "location": "DemoApplicationSteps.i_view_my_wishlist_table()"
});
formatter.result({
  "duration": 575146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "DemoApplicationSteps.i_find_total_selected_items_in_my_Wishlist(String)"
});
formatter.result({
  "duration": 472316800,
  "status": "passed"
});
formatter.after({
  "duration": 882666600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify_the_\u003crate\u003e_price_item_in_my_cart",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-\u003crate\u003e-price-item-in-my-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I search for \"\u003crate\u003e\" price product",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I am able to add the \"\u003crate\u003e\" price item to my cart",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am able to verify the item in my cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-\u003crate\u003e-price-item-in-my-cart;",
  "rows": [
    {
      "cells": [
        "TC_ID",
        "rate"
      ],
      "line": 21,
      "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-\u003crate\u003e-price-item-in-my-cart;;1"
    },
    {
      "cells": [
        "001",
        "lowest"
      ],
      "line": 22,
      "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-\u003crate\u003e-price-item-in-my-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9065295500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify_the_lowest_price_item_in_my_cart",
  "description": "",
  "id": "retail-demo-application---i-want-to-serach-a-product-in-the-product-details-screen-and-add-to-cart;verify-the-\u003crate\u003e-price-item-in-my-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TC002"
    },
    {
      "line": 1,
      "name": "@DemoShopApplication"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I search for \"lowest\" price product",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I am able to add the \"lowest\" price item to my cart",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am able to verify the item in my cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lowest",
      "offset": 14
    }
  ],
  "location": "DemoApplicationSteps.i_search_for_price_product(String)"
});
formatter.result({
  "duration": 1020076000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lowest",
      "offset": 22
    }
  ],
  "location": "DemoApplicationSteps.i_am_able_to_add_the_price_item_to_my_cart(String)"
});
formatter.result({
  "duration": 662970000,
  "status": "passed"
});
formatter.match({
  "location": "DemoApplicationSteps.i_am_able_to_verify_the_item_in_my_cart()"
});
formatter.result({
  "duration": 882223500,
  "status": "passed"
});
formatter.after({
  "duration": 705911500,
  "status": "passed"
});
});