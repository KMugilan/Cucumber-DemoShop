package com.test.cucumber.objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.test.cucumber.utilities.Commonlibraries;

public class PLPPageobjects extends Commonlibraries {


	public PLPPageobjects(WebDriver driver, WebDriverWait wait) {
		super(driver, wait);
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="//td[@class='product-name']/a")
	public WebElement labelCart;

	@FindBy(xpath="(//*[@class='la la-shopping-bag'])[1]")
	public WebElement buttonCart;

	public void clickCart() {
		clickOnElement(buttonCart);
	}

	public String getlblCart() {
		return getTextFromElement(labelCart);
	}
}
