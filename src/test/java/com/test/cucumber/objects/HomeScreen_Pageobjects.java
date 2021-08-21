package com.test.cucumber.objects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.test.cucumber.utilities.Commonlibraries;

public class HomeScreen_Pageobjects extends Commonlibraries {

	public HomeScreen_Pageobjects(WebDriver driver, WebDriverWait wait) {
		super(driver, wait);
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="//*[text()='Add to wishlist']")
	public List<WebElement> addWishlistBtn;

	@FindBy(xpath="//*[@class='cc-btn cc-accept-all cc-btn-no-href']")
	public WebElement acceptAllBtn;

	@FindBy(xpath="//*[contains(@class,'product-type')]//h2")
	public List<WebElement> labelProductType;

	@FindBy(xpath="(//*[@class='lar la-heart'])[1]")
	public WebElement buttonWishListIcon;

	@FindBy(xpath="//*[@class='products columns-5']//*[@class='woocommerce-Price-currencySymbol']/..")
	public List<WebElement> labellPrices;

	@FindBy(xpath="//*[text()='Add to cart']")
	public List<WebElement> buttonAddToCart;

	@FindBy(xpath="//*[text()='Add to cart']/..//bdi")
	public List<WebElement> listPriceCart;

	@FindBy(xpath="//*[text()='Add to cart']/..//h2")
	public List<WebElement> listAddtoCartHeader;

	@FindBy(xpath="//*[@class='added_to_cart wc-forward']")
	public WebElement buttonViewCard;

	@FindBy(xpath="//div[@class='yith-wcwl-wishlistaddedbrowse']")
	public WebElement buttonAddedWishList;
	
	@FindBy(xpath="//div[text()='Product added!']")
	public WebElement labelProductAdded;
	
	
	public boolean addedWishListDisplayed() {
		return buttonAddedWishList.isDisplayed();
	}

	public boolean viewCartDisplayed() {
		return buttonViewCard.isDisplayed();
	}

	public List<WebElement> addtoCartHeader() {
		return listAddtoCartHeader;
	}

	public List<WebElement> listbtnAddtoCart() {
		return buttonAddToCart;
	}

	public List<WebElement> addToCartPriceList() {
		return listPriceCart;
	}

	public List<WebElement> priceList() {
		return labellPrices;
	}

	public void clickAcceptAll() {
		clickOnElement(acceptAllBtn);
	}

	public List<WebElement> lstAddWishList() {
		return addWishlistBtn;
	}

	public List<WebElement> lstProductType() {
		return labelProductType;
	}

	public void clickWishListIcon() {
		clickOnElement(buttonWishListIcon);
	}

}
