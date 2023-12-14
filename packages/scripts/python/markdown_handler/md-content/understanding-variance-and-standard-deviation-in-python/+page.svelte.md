---
title: Understanding Variance and Standard Deviation in Python
created: 2023-02-18
tags: ['Variance', 'Standard Deviation', 'Python', 'Statistics']
image: '/understanding-variance-and-standard-deviation-in-python/image.png'
alt: 'Understanding Variance and Standard Deviation in Python'
summary: Variance and standard deviation are two commonly used measures of statistical dispersion. They can be used to quantify the amount of variation or dispersion of a set of values. In this blog, we'll learn how to calculate variance and standard deviation in Python without importing any modules.
---

## Headings

---

Variance and standard deviation are two commonly used measures of statistical dispersion. They can be used to quantify the amount of variation or dispersion of a set of values. In this blog, we'll learn how to calculate variance and standard deviation in Python without importing any modules.

To calculate variance, we first need to calculate the mean of a set of data values. The mean is simply the sum of all the values divided by the number of values. Once we have the mean, we can calculate the variance by subtracting the mean from each value, squaring the result, and summing up all the squared differences. Finally, we divide the sum of squared differences by the number of values to get the variance.

Here's a version of the code that calculates the variance of a set of data values:

```python
data = [164, 167, 169, 173, 174, 177, 178, 179, 179, 182, 183, 184, 188, 189, 194]

def variance(data):
    # calculate the mean of the data
    mean = sum(data) / len(data)
    # calculate the variance
    variance = sum((x - mean) ** 2 for x in data) / len(data)
    return variance

print(f"variance = {variance(data)}")
```

To calculate standard deviation, we take the square root of the variance. Standard deviation is a widely used measurement of the spread of a set of data values. It is defined as the square root of the variance. Here's a version of the code that calculates the standard deviation of a set of data values:

```python
data = [164, 167, 169, 173, 174, 177, 178, 179, 179, 182, 183, 184, 188, 189, 194]

def standard_deviation(data):
    # calculate the mean of the data
    mean = sum(data) / len(data)
    # calculate the variance
    variance = sum((x - mean) ** 2 for x in data) / len(data)
    # calculate the standard deviation
    standard_deviation = variance ** 0.5
    return standard_deviation

print(f"standard deviation = {standard_deviation(data)}")
```

In conclusion, variance and standard deviation are important measures of statistical dispersion that can help us understand the spread of a set of data values. In this blog, we've learned how to calculate variance and standard deviation in Python without importing any modules.

[scrollToTop](#headings)
