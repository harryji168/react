# rails g model product title:string description:text price:integer
# rails db:migrate
Product.create(title:'old title',description:'something here')
p = Product.last
p.update(title:'new title')
p.destroy