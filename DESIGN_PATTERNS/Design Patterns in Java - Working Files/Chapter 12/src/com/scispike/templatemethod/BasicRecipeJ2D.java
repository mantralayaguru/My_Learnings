package com.scispike.templatemethod;

// BasicRecipeJ2D.java
//Part 1 of the recipe, general program setup.

import java.awt.Canvas;
import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.geom.Rectangle2D;

@SuppressWarnings("serial")
public class BasicRecipeJ2D extends Frame {

	public BasicRecipeJ2D() {
		// constructor
		super("Java 2D basic recipe");
		this.add(new MyCustomCanvas());
		this.setSize(500, 500);
		this.setVisible(true);
//		this.show();
		addWindowListener(new WindowEventHandler());
	}

	class WindowEventHandler extends WindowAdapter {
		public void windowClosing(WindowEvent e) {
			System.exit(0);
		}
	}

	public static void main(String[] args) {
		new BasicRecipeJ2D();
	}
}

// Part 2; Java 2D specific-extend the drawing Component -Canvas-
// and override it's paint method.

@SuppressWarnings("serial")
class MyCustomCanvas extends Canvas {

	public void paint(Graphics g) {
		System.out.println("in paint");

		// step one of the recipe; cast Graphics object as Graphics2D
		Graphics2D g2d = (Graphics2D) g;

		// step two-set the graphics context
		g2d.setColor(Color.red); // setting context

		// step three-render something
		g2d.fill(new Rectangle2D.Float(200.0f, 200.0f, 75.0f, 75.0f));
	}
}