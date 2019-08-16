class Main {
	public static void main(String[] args) {
	  System.out.println(isPrime(10));
	}
	public static boolean isPrime(int number){
	  for (int i = 2; i < ((int) Math.sqrt(number)+1); i++){
		if (number % i == 0) {
		  return false;
		}
	  }
	  return true;
	}
  }