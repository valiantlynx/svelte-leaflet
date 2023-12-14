import numpy as np
import matplotlib.pyplot as plt

def f(x):
    return x**2

def analytical_solution(a, b):
    return (1/3) * (b**3 - a**3)

def numerical_integration_trapezoidal(a, b, n):
    h = (b - a) / n
    x_values = np.linspace(a, b, n+1)
    y_values = f(x_values)
    integral = (h/2) * (y_values[0] + 2*np.sum(y_values[1:n]) + y_values[n])
    return integral

# Parametere
a = 0
b = 2
n_values = [100]  # Antall trapeser

# Analytisk løsning
x_analytical = np.linspace(a, b, 100)
y_analytical = f(x_analytical)
analytical_solution_value = analytical_solution(a, b)

# Numerisk løsning for forskjellige n-verdier
numerical_solutions = [numerical_integration_trapezoidal(a, b, n) for n in n_values]

# Feilberegning
errors = [abs(analytical_solution_value - num_sol) for num_sol in numerical_solutions]

# Plot
plt.figure(figsize=(12, 8))

# Plot analytisk løsning
plt.plot(x_analytical, y_analytical, label='Analytisk løsning', linewidth=2, color='blue')

# Plot numerisk løsning med trapesmetoden for forskjellige n-verdier
for i, n in enumerate(n_values):
    x_numerical = np.linspace(a, b, n+1)
    y_numerical = f(x_numerical)
    plt.fill_between(x_numerical, 0, y_numerical, alpha=0.2, label=f'Numerisk (n={n})', color=f'C{i}')

# Vis markering for analytisk løsning
plt.axhline(y=analytical_solution_value, color='blue', linestyle='--', linewidth=2, label='Analytisk løsning')


# Legg til feilinformasjon
for i, n in enumerate(n_values):
    plt.text(0.5 * (a + b), 0.5 * (f(a) + f(b)), f'Feil (n={n}): {errors[i]:.4f}', color=f'C{i}', ha='center', va='center')
    plt.text(0.5 * (a + b), 0.5 * (f(a) + f(b)) - 0.1, f'Numerisk (n={n}): {numerical_solutions[i]:.4f}', color=f'C{i}', ha='center', va='center')
    plt.text(0.5 * (a + b), 0.5 * (f(a) + f(b)) - 0.2, f'Analytisk: {analytical_solution_value:.4f}', color='blue', ha='center', va='center')

plt.title('Analytisk og Numerisk Løsning med Trapesmetoden')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.show()
