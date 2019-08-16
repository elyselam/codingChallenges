class Main {
  public static void main(String[] args) {
    System.out.println(isPal("tatat"));
  }
  // ######without any helper functions
  // public static boolean isPal(String text) {
  //   for(int i = 0; i < text.length()/2; i++) {
  //     if (text.charAt(i) != text.charAt(text.length() -1-i)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  //###### with StringBuilder
  // public static boolean isPal(String text) {
  //   char[] arr = text.toCharArray();
  //   StringBuilder sb = new StringBuilder(text.length());
  //   for (int i = text.length()-1; i = 1; i--) {
  //     sb.append(array[i]);
  //   }
  //   return text.equals(sb.toString());
  // }

  public static boolean isPal(String text) {
    String reverse = reverse(text);
    if (text.equals(reverse)) {
      return true;
    }
    return false;
  }

  public static String reverse(String text) {
    //bc we know length of string so just block off an exact size and place at correct index
    char[] result = new char[text.length()];

    for (int i=0; i<result.length; i++) {
      result[i]= text.charAt(result.length-1-i);
    }
    return new String(result);
  }
}