import numpy as np
import matplotlib.pyplot as plt

def sin_approximation(x, n):
    result = 0
    for i in range(n):
        term = ((-1) ** i) * (x ** (2 * i + 1)) / np.math.factorial(2 * i + 1)
        result += term
    return result

x = np.linspace(-np.pi, np.pi, 200)
y = np.zeros(len(x))

labels = ['First Order', 'Third Order', 'Fifth Order', 'Seventh Order']

plt.figure(figsize=(10, 8))
for n, label in zip(range(1, 8, 2), labels):  # Adjusted to match the odd orders
    y = y + sin_approximation(x, n)
    plt.plot(x, y, label=f'{label} Approximation')

plt.plot(x, np.sin(x), 'k', label='Analytic (sin(x)')
plt.grid()
plt.title('Taylor Series Approximations of Various Orders and Original Sinus Function')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.show()
