//На этой странице мы объявляем методы и геттеры ?
export default class Page {
  

  get logo() {
    return $("img.logo.logo-themed");
  }
  get createAccountLink() {
    return $('a[routerlink="/register"][href="#/register"]');
  }
}
