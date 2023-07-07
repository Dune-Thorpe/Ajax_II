<?php
/*
header('Content-type: text/xml');
$dom = new DOMDocument();
$response = $dom->createElement('response');
$dom->appendChild($response);
$books = $dom->createElement('books');
$response->appendChild($books);
$title = $dom->createElement('title');
$titleText = $dom->createTextNode('AJAX and PHP Building Modern Web Applications, 2nd Edition');
$title->appendChild($titleText);
$author = $dom->createElement('author');
$authorText = $dom->createTextNode('Bogdan Brinzarea-lamandi');
$author->appendChild($authorText);
$isbn = $dom->createElement('isbn');
$isbnText = $dom->createTextNode('978-1904817726');
$isbn->appendChild($isbnText);
$book = $dom->createElement('book');
$book->appendChild($title);
$book->appendChild($author);
$book->appendChild($isbn);
$books->appendChild($book);
$xmlString = $dom->saveXML();
echo $xmlString;
*/
header('Content-Type: text/text');
$response = array(
    'books' => array(
        array(
            'title' => 'AJAX and PHP: Building Modern Web Applications, 2nd Edition',
            'author' =>  'Bogdan Brinzarea-lamandi',
            'isbn' => '978-1904817726'
        )
    )
        );
        echo json_encode($response);
?>