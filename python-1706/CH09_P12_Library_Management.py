class Book:
    def __init__(self , book_id , title , author):
        self.book_id = book_id
        self.title = title
        self.author = author
        self.is_issued = False
    def display(self):
        status = "Issued" if self.is_issued else "Available"
        print(f"Id             : " , self.book_id)
        print(f"Title          : " , self.title)
        print(f"author         : " , self.author)
        print(f"Status         : " , status)


class Library:
    def __init__(self):
        self.books = []

    def add_book(self):
        book_id = input("Enter book Id    : ")
        title = input("Enter book Title   : ")
        author = input("Enter book author : ")

        book = Book(book_id , title , author )
        self.books.append(book)
        
        print("Book added ✅")

    def view_books(self):
        print("\nAll Books \n:")
        for book in self.books:
            book.display()

    def search_book(self):
        id = input("Enter book id to search: ")
        found = False

        for book in self.books:
            if book.book_id == id:
                print("Book found !")
                book.display()
                found = True
                break
        if not found:
            print("Book Not Found 🔴")

    def issue_book(self):
        book_id = input("Enter The Book Id to issue : ")

        for book in self.books:
            if book.book_id == book_id:
                if book.is_issued:
                    print("Book Not Available 🔴")
                else:
                    book.is_issued= True
                    print("Book Issued. ✅")
                    return
        print("Book Not Found ")

    def submit_book(self):
        book_id = input("Enter The Book Id to issue : ")

        for book in self.books:
            if book.book_id == book_id:
                if not book.is_issued:
                    print("Book is already Available 🔴")
                else:
                    book.is_issued= False
                    print("Book Submitted . ✅")
                    return
            print("Book Not Found ")


library = Library()

while True:
    print("\n1. Add Book")
    print("2. View Books")
    print("3. Search Book")
    print("4. Issue Book")
    print("5. Submit Book")
    print("6. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        library.add_book()
    elif choice == "2":
        library.view_books()
    elif choice == "3":
        library.search_book()
    elif choice == "4":
        library.issue_book()
    elif choice == "5":
        library.submit_book()
    elif choice == "6":
        print("Thank You. ")
        
    else:
        print("Invalid choice!")