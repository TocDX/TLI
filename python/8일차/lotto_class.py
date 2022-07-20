import random


class lotto:

    def glotto(self):
        self.numbers = sorted(random.sample(range(1,46), 6))

    def get_money(self, real_numbers):
        if self.numbers == real_numbers:
            print('당신의 숫자는', numbers)
            print('당첨 숫자는', numbers)
            return 100000000
        else:
            return 0

Lotto = lotto()
Lotto.glotto()
print(Lotto.numbers)