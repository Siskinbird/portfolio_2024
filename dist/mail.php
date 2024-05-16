<?php
   $email = $_POST["email"];
   $name = $_POST["name"];
   $theme = $_POST["theme"];
   $message = '<html>
               <head>
                     <title>Заявка с сайта</title>
                 </head>
             <body>
                 <p><b>Имя:</b> '.$_POST['name'].'</p>
                 <p><b>Почта:</b> '.$_POST['email'].'</p>
                 <p><b>Тема:</b> '.$_POST['theme'].'</p>
                 <p><b>Сообщение:</b> '.$_POST['message'].'</p>
             </body>
         </html>';

   $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта dmich.ru")."?=";
   $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

   $success = mail('frontend.4u@ya.ru', $subject, $message, $headers);
   echo $success;