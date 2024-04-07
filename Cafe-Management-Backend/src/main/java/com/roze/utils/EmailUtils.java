package com.roze.utils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailUtils {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendSimpleMessage(String to, String subject, String text, List<String> list) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("rozexen7@gmail.com");
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(text);
        if (list != null && list.size() > 0) {
            simpleMailMessage.setCc(getCCArray(list));
        }
        javaMailSender.send(simpleMailMessage);
    }

    private String[] getCCArray(List<String> ccList) {
        String[] cc = new String[ccList.size()];
        for (int i = 0; i < ccList.size(); i++) {
            cc[i] = ccList.get(i);
        }
        return cc;
    }

    public void forgotMail(String to, String subject, String password) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom("rozexen7@gmail.com");
        helper.setTo(to);
        helper.setSubject(subject);
        String htmlMSG = "<p><b>Your Login details for Cafe Management System</b></p><b>Email:</b>" +
                to + "<br><b>Password: </b>" +
                password + "<br><a href=\"http://localhost:4200/\">Click here to login</a></p>";
        mimeMessage.setContent(htmlMSG, "text/html");
        javaMailSender.send(mimeMessage);


    }
}
