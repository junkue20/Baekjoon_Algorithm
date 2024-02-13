import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int H = sc.nextInt();
		int M = sc.nextInt();
		int sumM = sc.nextInt();
		int sumH = (M + sumM) / 60;
		if ((M + sumM) >= 60) {
			H = H + sumH;
			M = (M + sumM) % 60;
			if (H >= 24) {
				H = H - 24;
			}
			System.out.println(H + " " + M);
		} else {
			System.out.println((H + sumH) + " " + (M + sumM));
		}
	}
}
