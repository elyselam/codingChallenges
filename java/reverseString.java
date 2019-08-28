class Main {
  public static void main(String[] args) {
    String word = "hello";

    //// Quick way with built in method
    //// StringBuilder is expandable vs StringBuilder
    // String reverse = new StringBuffer(word).reverse().toString();
    // System.out.println(word, reverse);
 
    System.out.println(reverse(word));
  }

  public static String reverse(String input){
    if (input == null || input.isEmpty()) {
      return input;
    } 
    String result = "";
    for (int i = input.length() - 1; i >= 0; i--) {
      result = result + input.charAt(i);
    }
     return result;
  }

}