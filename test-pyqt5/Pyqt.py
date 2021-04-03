import sys

from PyQt5 import QtGui, QtCore, QtWidgets

class MainWindow:
    def __init__(self):
        self.app = QtWidgets.QApplication(sys.argv)
        
        
        self.window =QtWidgets.QMainWindow()

        
        #call maethod for label
        self.label = self.createlabel()
        
        #specify image path in your local directory
        self.image_path = "G:/PuzzleFun Workspace/Repository/pf_video_picker_repo/video-picker/test_lisa/task-snippingtool/application/blue car.jpg"
        self.image_path_2 ="G:/PuzzleFun Workspace/Repository/pf_video_picker_repo/video-picker/test_lisa/task-snippingtool/application/red.jpg"

        self.initGui(self.window) #call initGui after imagepath


        self.window.show()
        self.window.setWindowTitle("Mace Windu")
        self.window.setGeometry(300,50,300,500)
        self.window.setStyleSheet("background-color: #6e6e6e; border:3px solid #4e4e4e")
        
        #window.showMaximized() #window show full screen

        sys.exit(app.exec_())
    def initGui(self,window):
        #apply button
        apply_button = QtWidgets.QPushButton('Apply',window)
        apply_button.setGeometry(170,420,120,45)
        apply_button.setStyleSheet("background-color: blue; color:#f7f7f7")
        #add slot
        apply_button.clicked.connect(self.displayNewImage) #no parantheses in displayNewImage method

        #cancel button
        cancel_btn = QtWidgets.QPushButton('Cancel',window)
        cancel_btn.setGeometry(10,420,120,45)
        cancel_btn.setStyleSheet("background-color: red; color:#f7f7f7")
        #add slot
        cancel_btn.clicked.connect(self.displayDefaultImage)


        
        self.displayDefaultImage() #call display image here in initGui

    #add label on window
    def createlabel(self):
        create_label = QtWidgets.QLabel(self.window)
        create_label.setGeometry(0,0,300,400)
        create_label.setStyleSheet("background-color:#ffffff")

        return create_label

    def displayDefaultImage(self):
        default_img = QtGui.QImage(self.image_path)
        display_the_image = QtGui.QPixmap.fromImage(default_img)

        self.label.setPixmap(display_the_image)
        self.label.setScaledContents(True)
    
    def displayNewImage(self):
        new_img = QtGui.QImage(self.image_path_2)
        display_new_image = QtGui.QPixmap.fromImage(new_img)

        self.label.setPixmap(display_new_image)
        self.label.setScaledContents(True)



    
#instantiate an object to the class Mainwindow
main = MainWindow()
