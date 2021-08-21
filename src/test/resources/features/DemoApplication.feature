@DemoShopApplication
Feature: Retail Demo Application - I want to serach a product in the Product details screen and Add to Cart

  @TC001
  Scenario Outline: Verify_the_customer_add_a_products_in_the_wishlist
    Given I add "<product_count>" different product to my wish list
    When I view my wishlist table
    Then I find total "<product_count>" selected items in my Wishlist

    Examples: 
      | TC_ID | product_count |
      |   001 |             4 |

  @TC002
  Scenario Outline: Verify_the_<rate>_price_item_in_my_cart
    Given I search for "<rate>" price product
    When I am able to add the "<rate>" price item to my cart
    Then I am able to verify the item in my cart

    Examples: 
      | TC_ID | rate   |
      |   001 | lowest |
