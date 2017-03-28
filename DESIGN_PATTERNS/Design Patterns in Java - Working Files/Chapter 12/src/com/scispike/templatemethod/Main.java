package com.scispike.templatemethod;

import java.awt.Canvas;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class Main {
	@SuppressWarnings("serial")
	private static class SimpleCanvas extends Frame {
		public SimpleCanvas() {
			super("Template Method Example");
			this.setSize(500,500);
			this.setVisible(true);
			this.addWindowListener(new WindowAdapter() {
				@Override
				public void windowClosing(WindowEvent e) {
					// TODO Auto-generated method stub
					System.exit(0);
				}
			});
		}
	}
	abstract private static class Shape  {
		abstract public void draw(Canvas c)
		abstract public void move(int deltaX, int deltaY);
	}
	}
	public static void main(String[] args) {
		new SimpleCanvas();
		
	}
}
