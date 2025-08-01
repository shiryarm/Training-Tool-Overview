//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let a3Button;
let a4Button;
let b1Button;
let b2Button;
let b3Button;
let b4Button;
let c1Button;
let c2Button;
let c3Button;
let c4Button;
let d1Button;
let d2Button;
let d3Button;
let d4Button;
let restartButton;
let screen = 0;
let backgroundImg;

function preload() {
  backgroundImg = loadImage('office_picture.jpeg');
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  textFont('Times New Roman');
  noStroke();

  background(backgroundImg);
  text("You are an employee at Google, working \nthrough every day challenges on your computer.", width / 2, height / 2 - 100);


  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  a3Button = new Sprite(-100, -100);
  a4Button = new Sprite(-150, -150);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-50, -50);
  b3Button = new Sprite(-100, -100);
  b4Button = new Sprite(-150, -150);
  c1Button = new Sprite(-200, -200);
  c2Button = new Sprite(-50, -50);
  c3Button = new Sprite(-100, -100);
  c4Button = new Sprite(-150, -150);
  d1Button = new Sprite(-200, -200);
  d2Button = new Sprite(-50, -50);
  d3Button = new Sprite(-100, -100);
  d4Button = new Sprite(-150, -150);
  restartButton = new Sprite(-200, -200);
}

function draw() {
  if (screen == 0) {
    background(backgroundImg);
    text("You are an employee at Google,\n working through everyday\n challenges on your computer. ", width / 2, height / 2 - 100);
    textSize(26);
  }

  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "static";
  enterButton.rotationLock = true;
  enterButton.vel = { x: 0, y: 0 };
  enterButton.color = "white";
  if (screen == 0) {
    enterButton.text = "Open\nComputer";
  }
  enterButton.textSize = 17;

  if (enterButton.mouse.presses()) {
    print("Pressed");
    background(backgroundImg);
    text("'Hey, I’m Sam from IT. We’re fixing a server\n issue — can you give me your login so I can\n test something quickly? Boss is waiting on this.'", width / 2, height / 2 - 100);
    enterButton.pos = { x: -100, y: -100 };

    a1Button.pos = { x: width / 2 - 150, y: height / 2 + 125 };
    a1Button.w = 150;
    a1Button.h = 50;
    a1Button.collider = "k";
    a1Button.rotationLock = true;
    a1Button.rotation = 0;
    a1Button.color = "white";
    a1Button.text = "Ask to see their\n employee ID or \nconfirm with your boss.";
    a1Button.textSize = 15

    a2Button.pos = { x: width / 2 + 150, y: height / 2 + 125 };
    a2Button.w = 150;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.rotationLock = true;
    a2Button.rotation = 0;
    a2Button.color = "white";
    a2Button.text = "Direct them to another \ncoworker, saying they \nmight be able to help.";
    a2Button.textSize = 15

    a3Button.pos = { x: width / 2 - 150, y: height / 2 + 25 };
    a3Button.w = 150;
    a3Button.h = 50;
    a3Button.collider = "k";
    a3Button.rotationLock = true;
    a3Button.rotation = 0;
    a3Button.color = "white";
    a3Button.text = "Tell them you’ll log in \nyourself and ask \nwhat they need.";
    a3Button.textSize = 15;

    a4Button.pos = { x: width / 2 + 150, y: height / 2 + 25 };
    a4Button.w = 150;
    a4Button.h = 50;
    a4Button.collider = "k";
    a4Button.rotationLock = true;
    a4Button.rotation = 0;
    a4Button.color = "white";
    a4Button.text = "Give them your \nlogin to help out.";
    a4Button.textSize = 15

    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      print("Displaying screen 2");
      background(backgroundImg);
      textStyle(NORMAL);
      textSize(18);
      text(" You're part of a private GitHub repo for an unreleased product. A \nclose colleague DMs you: 'Hey, my access token expired. Can \nyou zip and send me the most recent build? I need to fix something\n fast before legal reviews it.'", width / 2, height / 2 - 90);
      textSize(17);
      textStyle(BOLD);
      text("They refuse and vanish. You avoided hanging over credentials, good job!", width / 2, height / 2 - 120);
      textStyle(NORMAL);
      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };

      enterButton.pos = { x: -1000, y: -1000 };

      b1Button.pos = { x: width / 2 - 150, y: height / 2 + 125 };
      b1Button.w = 150;
      b1Button.h = 50;
      b1Button.collider = "static";
      b1Button.rotationLock = true;
      b1Button.rotation = 0;
      b1Button.color = "white";
      b1Button.text = "Send the zip and tell them\n to update their token after.";
      b1Button.textSize = 14;

      b2Button.pos = { x: width / 2 + 150, y: height / 2 + 125 };
      b2Button.w = 150;
      b2Button.h = 50;
      b2Button.collider = "static";
      b2Button.rotationLock = true;
      b2Button.rotation = 0;
      b2Button.color = "white";
      b2Button.text = "Ask them to ping the\n repo admin directly.";
      b2Button.textSize = 14;

      b3Button.pos = { x: width / 2 - 150, y: height / 2 + 25 };
      b3Button.w = 150;
      b3Button.h = 50;
      b3Button.collider = "static";
      b3Button.rotationLock = true;
      b3Button.rotation = 0;
      b3Button.color = "white";
      b3Button.text = "Suggest they remote into your\n system to pull it themselves.";
      b3Button.textSize = 13;

      b4Button.pos = { x: width / 2 + 150, y: height / 2 + 25 };
      b4Button.w = 150;
      b4Button.h = 50;
      b4Button.collider = "static";
      b4Button.rotationLock = true;
      b4Button.rotation = 0;
      b4Button.color = "white";
      b4Button.text = "Share the file after confirming \nthe request verbally \nor in person.";
      b4Button.textSize = 12;

      screen = 2;
    }

    else if (a2Button.mouse.presses()) {
      print("Displaying screen 3");
      screen = 3;
      background(backgroundImg);
      textSize(20);
      textStyle(BOLD);
      text("❌If a stranger knocked on your door and asked for your \nhouse key, would you say, ‘I can’t give it to you, but try my \nneighbor’? That still puts someone at risk.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);


      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
    }

    else if (a3Button.mouse.presses()) {
      print("Displaying screen 4");
      background(backgroundImg);
      textSize(17);
      textStyle(BOLD);
      text("They refuse and vanish. You avoided handing over credentials, good job!", width / 2, height / 2 - 120);
      textStyle(NORMAL);
      textSize(20);
      text("You deny a suspicious MFA push, then five\n minutes later, get another. The same thing happened last\n week. You reported it, but nothing changed.", width / 2,height / 2 - 90);
      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };

      c1Button.pos = { x: width / 2 - 150, y: height / 2 + 125 };
      c1Button.w = 150;
      c1Button.h = 50;
      c1Button.collider = "static";
      c1Button.rotationLock = true;
      c1Button.rotation = 0;
      c1Button.color = "white";
      c1Button.text = "Disable MFA temporarily \nand reset it after the meeting.";
      c1Button.textSize = 13;

      c2Button.pos = { x: width / 2 + 150, y: height / 2 + 125 };
      c2Button.w = 150;
      c2Button.h = 50;
      c2Button.collider = "static";
      c2Button.rotationLock = true;
      c2Button.rotation = 0;
      c2Button.color = "white";
      c2Button.text = "Block push notifications and\n check again after the meeting.";
      c2Button.textSize = 13;

      c3Button.pos = { x: width / 2 - 150, y: height / 2 + 25 };
      c3Button.w = 150;
      c3Button.h = 50;
      c3Button.collider = "static";
      c3Button.rotationLock = true;
      c3Button.rotation = 0;
      c3Button.color = "white";
      c3Button.text = "Approve it just this once — \nyou’ve already reported it.";
      c3Button.textSize = 13;

      c4Button.pos = { x: width / 2 + 150, y: height / 2 + 25 };
      c4Button.w = 150;
      c4Button.h = 50;
      c4Button.collider = "static";
      c4Button.rotationLock = true;
      c4Button.rotation = 0;
      c4Button.color = "white";
      c4Button.text = "Call IT live, report the repeated\n push, and request a reset.";
      c4Button.textSize = 12; 

      screen = 4;
    }

    else if (a4Button.mouse.presses()) {
      print("Displaying screen 5");
      background(backgroundImg);
      textStyle(BOLD);
      textSize(17);
      text("❌They steal your's and the company's data! \nReal IT never asks for passwords!❌ ", width / 2, height / 2 - 125);
      textStyle(NORMAL);
      text("Your login is like the key to your house. If you give\n it to someone, they can go inside, look around, take things, or change stuff\n — and you won’t even know it happened. Even if they sound\n trustworthy, you can’t be sure who’s really asking.", width / 2, height / 2 - 80 );
      textSize(16);
      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 5;
    }
  }

  if (screen == 2) {
    if (b1Button.mouse.presses()) {
      print("Displaying screen 10");
      background(backgroundImg);
      textStyle(BOLD);
      text(" ❌Even trusted accounts can be hijacked!❌", width / 2, height / 2 - 120);
      textStyle(NORMAL);
      text("Never rely on relationship alone — verify behavior, not names.", width / 2, height / 2 - 90)

      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -50, y: -50 };
      b3Button.pos = { x: -100, y: -100 };
      b4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 10;
    }
    else if (b2Button.mouse.presses()) {
      print("Displaying screen 11");
      background(backgroundImg);
      textStyle(BOLD);
      text("❌Puts the burden back on them, which might\n lead them to pressure someone else.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      text("If you redirect, do it with escalation, not deflection.", width / 2, height / 2 - 50);
      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -50, y: -50 };
      b3Button.pos = { x: -100, y: -100 };
      b4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 11;
    }
    else if (b3Button.mouse.presses()) {
      print("Displaying screen 12");
      background(backgroundImg);
      textStyle(BOLD);
      text("❌You just handed over control of your environment.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      text("No one should ever remote in without formal approval — ever.", width / 2, height / 2 - 70);
      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -50, y: -50 };
      b3Button.pos = { x: -100, y: -100 };
      b4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 12;
    }
    else if (b4Button.mouse.presses()) {
      print("Displaying screen 13");
      background(backgroundImg);
      textStyle(BOLD);
      textSize(17);
      text("✅If they’re real, a 10-second confirmation ends the issue. \nIf not, you avoid sending intellectual property to a compromised account.✅", width / 2, height / 2 - 140);
      textStyle(NORMAL);
      text("A delivery person shows up outside your office area holding\n a box of laptops, looking rushed. They say: 'These were meant\n for IT, but I’ve got 5 other stops. Can someone just sign\n and take them so I’m not late?'", width / 2, height / 2 - 80)
      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -50, y: -50 };
      b3Button.pos = { x: -100, y: -100 };
      b4Button.pos = { x: -150, y: -150 };

      d1Button.pos = { x: width / 2 - 150, y: height / 2 + 125 };
      d1Button.w = 150;
      d1Button.h = 50;
      d1Button.collider = "static";
      d1Button.rotationLock = true;
      d1Button.rotation = 0;
      d1Button.color = "white";
      d1Button.text = "Sign for the package and\n let IT know afterward.";
      d1Button.textSize = 14;

      d2Button.pos = { x: width / 2 + 150, y: height / 2 + 125 };
      d2Button.w = 150;
      d2Button.h = 50;
      d2Button.collider = "static";
      d2Button.rotationLock = true;
      d2Button.rotation = 0;
      d2Button.color = "white";
      d2Button.text = "Refuse delivery and tell\n them to come back with\n IT present.";
      d2Button.textSize = 14;

      d3Button.pos = { x: width / 2 - 150, y: height / 2 + 25 };
      d3Button.w = 150;
      d3Button.h = 50;
      d3Button.collider = "static";
      d3Button.rotationLock = true;
      d3Button.rotation = 0;
      d3Button.color = "white";
      d3Button.text = "Take the box, place it in a\n locked room, and \nnotify IT.";
      d3Button.textSize = 14;

      d4Button.pos = { x: width / 2 + 150, y: height / 2 + 25 };
      d4Button.w = 150;
      d4Button.h = 50;
      d4Button.collider = "static";
      d4Button.rotationLock = true;
      d4Button.rotation = 0;
      d4Button.color = "white";
      d4Button.text = "Ask them to show delivery\n instructions while you\n call IT.";
      d4Button.textSize = 14;

      screen = 13;
    }
  }

  if (screen == 3) {
    if (restartButton.mouse.presses()) {
      print("Restarting to screen 0");
      background(backgroundImg);
      text("Welcome to screen 0. This is the home screen.", width / 2, height / 2 - 100);
      restartButton.pos = { x: -200, y: -200 };

      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };

      enterButton.pos = { x: width / 2, y: height / 2 + 100 };
      screen = 0;
    }
  }
  if (screen == 4) {
    if (c1Button.mouse.presses()) {
      print("Displaying screen 6");
      textStyle(BOLD);
      background(backgroundImg);
      text("❌Disabling MFA lowers your defenses in the middle of an attack. \nIf the attacker already has your password and you remove MFA, \nthey can walk right in. You might forget to turn it back\n on — and it signals to the attacker that you're reacting.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);

      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -50, y: -50 };
      c3Button.pos = { x: -100, y: -100 };
      c4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 6;
    }
    else if (c2Button.mouse.presses()) {
      print("Displaying screen 7");
      background(backgroundImg);
      textStyle(BOLD);
      text("❌This delays your response to a real attack. Even worse, if an \nattacker does gain access, you won’t know because you’ve \nblocked the warning signs. It's like ignoring a fire \nalarm because you're on a Zoom call.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -50, y: -50 };
      c3Button.pos = { x: -100, y: -100 };
      c4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 7;
    }
    else if (c3Button.mouse.presses()) {
      print("Displaying screen 8");
      background(backgroundImg);
      textStyle(BOLD);
      text(" ❌This is exactly what an attacker is hoping you’ll do. \nThey’re using a technique called MFA fatigue — sending nonstop\n push requests hoping you’ll get frustrated or\n distracted and tap 'Approve' without thinking.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);

      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -50, y: -50 };
      c3Button.pos = { x: -100, y: -100 };
      c4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 8;
    }
    else if (c4Button.mouse.presses()) {
      print("Displaying screen 9");
      background(backgroundImg);
      textStyle(NORMAL);
      text("✅This is likely an MFA fatigue attack, where\n an attacker floods you with requests hoping you’ll\n give in. Actively denying and reporting \nit in real-time is the best defense.✅", width / 2, height / 2 - 100);
      textStyle(BOLD);
      text("Good job! Here is why you were right:", width / 2, height / 2 - 140)
      textStyle(NORMAL);

      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -50, y: -50 };
      c3Button.pos = { x: -100, y: -100 };
      c4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 9;
    }
  }

  if (screen == 5) {
    if (restartButton.mouse.presses()) {
      print("Restarting to screen 0");
      background(backgroundImg);
      text("Welcome to screen 0. This is the home screen.", width / 2, height / 2 - 100);
      restartButton.pos = { x: -200, y: -200 };

      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };

      enterButton.pos = { x: width / 2, y: height / 2 + 100 };
      screen = 0;
    }
  }

  if (screen == 13) {
    if (d1Button.mouse.presses()) {
      print("Displaying screen 14");
      background(backgroundImg);
      textStyle(BOLD);
      textSize(17);
      text("❌You’ve already taken responsibility for something you didn’t check.\n If there’s something wrong — like the laptops being fake or tampered with\n — it’s too late. You’ve accepted them, and IT can’t undo that.\n Even if it seemed fine in the moment, you’re\n opening the door to a security risk.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      d1Button.pos = { x: -200, y: -200 };
      d2Button.pos = { x: -50, y: -50 };
      d3Button.pos = { x: -100, y: -100 };
      d4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 14;
    }
    else if (d2Button.mouse.presses()) {
      print("Displaying screen 15");
      background(backgroundImg);
      textStyle(BOLD);
      textSize(17);
      text("❌If you refuse the delivery and tell the delivery person to come back with IT, \nthat might sound like a safe choice, but it can actually make things harder. \nWhat if the delivery was real? You’ve just delayed your own team’s \nequipment, and now things are more complicated. It’s better to pause\n and check with IT right away than to shut it down without knowing.❌", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      d1Button.pos = { x: -200, y: -200 };
      d2Button.pos = { x: -50, y: -50 };
      d3Button.pos = { x: -100, y: -100 };
      d4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 15;
    }
    else if (d3Button.mouse.presses()) {
      print("Displaying screen 16");
      background(backgroundImg);
      textStyle(BOLD);
      text("⚠️If you take the box and lock it in a room, that still puts you at risk. \nJust because something is locked away doesn’t mean it’s safe.\n You don’t know what’s inside — it could have something dangerous or\n fake inside — and you’ve still accepted it without checking. That’s \nnot a full stop, it’s just a delay.⚠️", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      d1Button.pos = { x: -200, y: -200 };
      d2Button.pos = { x: -50, y: -50 };
      d3Button.pos = { x: -100, y: -100 };
      d4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 16;
    }
    else if (d4Button.mouse.presses()) {
      print("Displaying screen 17");
      background(backgroundImg);
      textStyle(BOLD);
      text("✅ You’re not saying no right away, but you’re also not taking\n a risk. You’re calmly checking that the delivery is real and meant for your\n company, and making sure it goes to the right place. This\n keeps everyone safe, including you. It also shows that you take security \nseriously without creating a big scene.✅ ", width / 2, height / 2 - 100);
      textStyle(NORMAL);
      d1Button.pos = { x: -200, y: -200 };
      d2Button.pos = { x: -50, y: -50 };
      d3Button.pos = { x: -100, y: -100 };
      d4Button.pos = { x: -150, y: -150 };
      restartButton.pos = { x: width / 2, y: height / 2 + 100 };
      restartButton.w = 100;
      restartButton.h = 50;
      restartButton.collider = "static";
      restartButton.rotationLock = true;
      restartButton.rotation = 0;
      restartButton.color = "white";
      restartButton.text = "Restart";
      screen = 17;
    }
  }

  if (screen == 6 || screen == 7 || screen == 8 || screen == 9 || screen == 10 || screen == 11 || screen == 12 || screen == 14 || screen == 15 || screen == 16 || screen == 17) {
    if (restartButton.mouse.presses()) {
      print("Restarting to screen 0");
      background(backgroundImg);
      text("Welcome to screen 0. This is the home screen.", width / 2, height / 2 - 100);
      restartButton.pos = { x: -200, y: -200 };

      a1Button.pos = { x: -1000, y: -1000 };
      a2Button.pos = { x: -1000, y: -1000 };
      a3Button.pos = { x: -1000, y: -1000 };
      a4Button.pos = { x: -1000, y: -1000 };

      enterButton.pos = { x: width / 2, y: height / 2 + 100 };
      screen = 0;
    }
  }


  print(screen);
}
