-- Write a SQL query to display the order number followed by order date and the purchase amount for each order which will be delivered by the salesman who is holding the ID 5001.


SELECT ord_no, ord_date, purch_amt FROM orders 
WHERE salesman_id = 5001


-- Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to the same city.

SELECT salesman.name, customer.cust_name, orders.city
FROM salesman
INNER JOIN customers ON salesman.city = customers.city
