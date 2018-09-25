# Lesson 1: Sending and Standard Out

<img src="https://www.rchain.coop/assets/helloWorld.png" alt="learn-rholang-by-example" height="300"/>

There is a long-standing tradition in programming that your first program should say "Hello World". Here's the simplest rholang code to put that text on the screen.

```
new stdout('rho:io:stdout') in {
                stdout!("Hello World!")}
```

### Exercise
Make the program print "Rholang rocks!" instead of "Hello World".

### Exercise
Try to change "stdout" to something else. Any results?


- Try this funny channel name
> @"someChannel"

- We're casual here. Make the program say "Sup World" on the screen.


# WTH is stdout?
<img src="https://www.rchain.coop/assets/mailbox.png" alt="learn-rholang-by-example" height="300"/>

The heart of rholang is communicating on channels. Channels are communication lines that you use to send and receive messages. To send a message on a channel, you use the `!` character.

<img src="https://www.rchain.coop/assets/sendSyntax.png" alt="learn-rholang-by-example" height="200"/>

`stdout` is a special channel that is used to send text to "standard out" which usually just means your computer screen. Because it's special, we had to have that first line of code.


# Using other channels
<img src="https://www.rchain.coop/assets/mailboxes.png" alt="learn-rholang-by-example" height="200"/>

You can actually send messages on lots of channels, not just stdout. But unlike stdout they won't display on the screen.

```
@"RandoChannel"!("This won't be on the screen")
```

So where do the other channels go then? Nowhere! Not yet anyway. The messages just sit there waiting for someone to receive or "consume" them. We'll learn how to consume messages in the next lesson. The place where messages sit in the meantime is called the "tuplespace".

Remember when you tried it a few slides ago? Try that again and make sure your message is sitting in the tuplespace.

You should find something like this highlighted text in your tuplespace.