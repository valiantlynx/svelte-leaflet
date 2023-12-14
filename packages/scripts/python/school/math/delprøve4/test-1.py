from sympy import Function, dsolve, Eq, Derivative, symbols
from sympy.abc import x

# Define the unknown function
y = Function('y')

# A function that takes the differential equation and initial conditions and returns the solution
def solve_diff_eq(eq, y0, dy0):
    """
    Solves a differential equation with given initial conditions.
    
    Parameters:
    eq : sympy.Eq
        The differential equation to solve.
    y0 : number
        The initial condition at y(0).
    dy0 : number
        The initial condition at y'(0).
    
    Returns:
    sympy.Eq
        The solution of the differential equation.
    """
    # Solve the differential equation with the initial conditions
    solution = dsolve(eq, y(x), ics={y(0): y0, Derivative(y(x),x).subs(x, 0): dy0})
    return solution

# Example usage:
# Define the differential equation
diff_eq = Eq(Derivative(y(x), x, x) + 3*Derivative(y(x), x), 4*y(x))

# Initial conditions
y0 = 2
dy0 = -5

# Solve the differential equation
solution = solve_diff_eq(diff_eq, y0, dy0)
print(solution)
