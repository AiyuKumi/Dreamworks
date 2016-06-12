<%
Dim mail, body

body = "Major: " & Request.Form("major") & vbcrlf & vbcrlf & "Feedback: " & Request.Form("feedback")

Set mail = Server.CreateObject("CDO.Message")
mail.To = Request.Form("info@dreamworks.be")
mail.From = Request.Form("CFForm5889Field90762")
mail.Mail = Request.Form("CFForm5889Field90772")
mail.Subject = Request.Form("CFForm5889Field90774")
mail.TextBody = body
mail.Send()

Response.Write("Thanks for submitting the feedback.")

Set mail = nothing
Set body = nothing
%>