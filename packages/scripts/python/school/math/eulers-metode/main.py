import numpy as np
import matplotlib.pyplot as plt

# Parametere
k = 0.1  # Konstant
T_omg = 20  # Temperatur i omgivelsene
T0 = 80  # Initial temperatur
t_max = 10  # Maksimal tid

# Analytisk løsning
def analytical_solution(t):
    return (T0 - T_omg) * np.exp(-k * t) + T_omg

# Numerisk løsning (Euler-metoden)
def numerical_solution(dt):
    t_values = np.arange(0, t_max, dt)
    T_values = [T0]

    for t in t_values[:-1]:
        dTdt = -k * (T_values[-1] - T_omg)
        T_new = T_values[-1] + dTdt * dt
        T_values.append(T_new)

    return np.array(t_values), np.array(T_values)

# Simuleringsparametere
dt = 0.5

# Hent numerisk løsning
t_numerical, T_numerical = numerical_solution(dt)

# Hent analytisk løsning
t_analytical = np.linspace(0, t_max, 1000)
T_analytical = analytical_solution(t_analytical)

# Lag plot
plt.figure(figsize=(10, 6))
plt.plot(t_analytical, T_analytical, label='Analytisk løsning')
plt.plot(t_numerical, T_numerical, label='Numerisk løsning (Euler-metoden)', linestyle='dashed', marker='o')
plt.title('Løsning av første ordens initialverdiproblem')
plt.xlabel('Tid')
plt.ylabel('Temperatur')
plt.legend()
plt.grid(True)
plt.show()
