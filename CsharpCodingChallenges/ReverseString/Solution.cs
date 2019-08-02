using System;

namespace ReverseString {
    public static class Solution {
        public static void ReverseString(char[] s) {
            char temp;

            for (int i = 0; i < s.Length / 2; i++) {
                temp = s[i];
                s[i] = s[s.Length - 1 - i];
                s[s.Length - 1 - i] = temp;
            }

            for (int i = 0; i < s.Length; i++) {
                Console.Write(s[i]);
            }
        }
    }
}