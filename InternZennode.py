#Catalog - Product Name: Product Price
A,B,C=20,40,50

#Inputs
QA=int(input("How many Quantity of \"Product A\" You Want ? \n"))
QAF=int(input("How many \"Product A\" with Gift Wrappers You Want? \n"))
QB=int(input("How many Quantity of \"Product B\" You Want ? \n"))
QBF=int(input("How many \"Product B\" with Gift Wrappers You Want ? \n"))
QC=int(input("How many Quantity of \"Product C\" You Want ? \n"))
QCF=int(input("How many  \"Product C\" with Gift Wrappers You Want ? \n"))

#Bill
xxx= "___________________________________"
#1 Table
print("Product Name - Quantity - Total Amount")
print(xxx)
print("Product A - {} - ${}".format(QA,QA*A))
print("Product B - {} - ${}".format(QB,QB*B))
print("Product C - {} - ${}".format(QC,QC*C))

#2 SubTotal
Total=(QA*A)+(QB*B)+(QC*C)
print(xxx)
print("Total : $",Total)

#3 Discount
Discount={}

if Total > 200:
	key="flat_10_discount"
	val=10
	Discount[key]=val
	
if QA>10 or QB>10 or QC>10:
	key="bulk_5_discount"
	val=0
	if QA>10:
		val+=0.05*(QA*A)
	if QB>10:
		val+=0.05*(QB*B)
	if QC>10:
		val+=0.05*(QC*C)
	Discount[key]=val
	
if QA+QB+QC>20:
	key="bulk_10_discount"
	val=0.1*Total
	Discount[key]=val
	
if QA+QB+QC>30:
	key="tiered_50_discount"
	val=0
	if QA>15:
		val+=0.5*((QA-15)*A)
	if QB>15:
		val+=0.5*((QB-15)*B)
	if QC>15:
		val+=0.5*((QC-15)*C)

#Beneficial

Ben= int(max([Discount[i] for i in Discount]))
for i in Discount:
	if Discount[i]==Ben:
		Name=i
		break

print(xxx)		
print("Discount Applied :",Name)
print("Discount Amount : $",Ben)

#Ship Fee
si=(QA+QB+QC)/10
SF = int(si*5)
print('Shipping Fee : $',SF)

#Gift Fee
GF=QAF+QBF+QCF
print('Gift Wrapper Feeb: $',GF)

#Total
Total=Total-Ben+SF+GF
print(xxx)
print("Total : $",Total)
print(xxx)


