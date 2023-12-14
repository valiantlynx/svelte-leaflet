import numpy as np
import matplotlib.pyplot as plt

# Definer funksjonen og dens deriverte
def f(x):
    return x**3 - 2*x - 5

def df(x):
    return 3*x**2 - 2

# Newtons metode implementasjon
def newtons_metode(startverdi, tol=1e-6, max_iter=100):
    x = startverdi
    iterasjoner = 0
    nullpunkt = None
    iterasjon_x = [x]
    iterasjon_y = [f(x)]

    while abs(f(x)) > tol and iterasjoner < max_iter:
        x = x - f(x) / df(x)
        iterasjon_x.append(x)
        iterasjon_y.append(f(x))
        iterasjoner += 1

    if abs(f(x)) <= tol:
        nullpunkt = x

    return nullpunkt, iterasjon_x, iterasjon_y

# Visualiser funksjonen og Newtons metode med flere iterasjoner
x_vals = np.linspace(-2, 3, 100)
y_vals = f(x_vals)

startverdi = 3
nullpunkt, iterasjon_x, iterasjon_y = newtons_metode(startverdi)

plt.plot(x_vals, y_vals, label='$f(x) = x^3 - 2x - 5$')
plt.scatter(startverdi, f(startverdi), color='red', marker='o', label='Startverdi')
plt.scatter(nullpunkt, 0, color='green', marker='x', label='Nullpunkt')

for i in range(len(iterasjon_x)):
    plt.annotate(f'Iterasjon {i}', (iterasjon_x[i], iterasjon_y[i]), textcoords="offset points", xytext=(-10, 10), ha='center')

plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(nullpunkt, linestyle='--', color='green', linewidth=0.5, label='Tilstrekkelig nøyaktig løsning')

plt.title('Visualisering av Newtons metode med flere iterasjoner')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.show()