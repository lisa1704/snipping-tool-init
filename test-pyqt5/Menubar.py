import sys

from PyQt5 import QtGui, QtCore, QtWidgets

class MainWindow:
    def __init__(self):
        self.app = QtWidgets.QApplication(sys.argv)
        self.window = QtWidgets.QMainWindow()

        self.window.setWindowTitle("Main Window")
        self.window.show()
        self.window.setGeometry(50,50,340,200)
        self.window.setStyleSheet("background-color: #6e6e6e; border:3px solid #4e4e4e")