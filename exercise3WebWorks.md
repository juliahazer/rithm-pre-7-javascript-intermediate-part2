# How The Web Works Exercise

1. What is HTTP?
	
	Hyper Text Transfer Protocol: a well-defined client-server protocol which allows the client to get data from the server or set data on the server. It is the protocol in use for every web site you visit online.

2. What is a URL?

	Short for Uniform Resource Locator, a URL is an address for some internet resource.

3. What is TCP?

	Transmission Control Protocol - governs how hosts connect to one another and exchange data.

4. What is IP?

	The Internet Protocol (IP) is the protocol that governs how data is sent across a network from one computer to another.

5. What is DNS?

	Domain Name System: a system that takes human-readable URLs and converts them into IP addresses.

6. What is idempotent?

	Operations that produce the same result no matter how many times they are executed.

7. What is a query string?
	
	You can pass key-value pairs into the URL: ?key=value1&key2=value2...	
	
8. What is a path or route?
	
	The path typically refers to a single file that lives on the server, or some resource that the server is able to dynamically create, read, update, or delete.

9. List four HTTP Verbs and their use cases.

	GET: get data from the server
	POST: send data fo the server
	PATCH: update/modify data
	DELETE: remove data

10. What is a client?

	A computer that initiates requests to a remote server.

11. What is a server?

	A computer that can receive requests from multiple clients and issue responses

12. What is an HTTP request?

	A request from a client to a server which follows the HTTP protocol (e.g., request for HTML)

13. What is an HTTP response?

	A response from a server to a client which follows the HTTP protocol (e.g., HTML file).

14. What is an HTTP header? Give a couple examples of request and response headers you have seen.

	Headers provide additional information about the request or the response. Here are some examples:

	Request headers: Host, User-Agent, Accept, Cookie, Cache-Control Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control

15. What is REST?

	REpresentional State Transfer - popular framework for building web services.

16. What is JSON?

	JavaScript Object Notation - standard way to format data to transfer between clients and servers (and easy to convert to JavaScript).

17. What happens when you type in "Hello World" in google.com and press enter?

	https://github.com/alex/what-happens-when

18. What does it mean when we say the web is "stateless"?

	Each HTTP request is independent, with no prior knowledge of the previous requests.

19. What is curl?

	Command line tool to send/receive data to/from a server (e.g., to make HTTP requests).

20. Make a GET request to http://omdbapi.com?t=titanic using curl (your answer should be the curl command required).

	curl http://omdbapi.com?t=titanic