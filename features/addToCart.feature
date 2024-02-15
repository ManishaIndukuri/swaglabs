Feature: Swaglabs add to cart

  Scenario Outline: As a user, I can log into the Swaglabs and add multiple products to cart
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a products page
    And get product "Sauce Labs Bike Light" cost and save shared data in key "Sauce_Labs_Bike_Light_price"
    And add product "Sauce Labs Bike Light" to cart
    And get product "Sauce Labs Backpack" cost and save shared data in key "Sauce_Labs_Backpack_price"
    And add product "Sauce Labs Backpack" to cart
    And click shopping cart
    And click checkout button
    And enter user information firstname as "manisha" lastname as "indukuri" postal code "500078"
    And click on continue button
    And validate total of products "Sauce_Labs_Backpack_price,Sauce_Labs_Bike_Light_price" cost equals the total products cost without tax in Checkout two page
    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

