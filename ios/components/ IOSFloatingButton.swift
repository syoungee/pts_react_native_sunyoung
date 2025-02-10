import UIKit
import React

@objc(IOSFloatingButton)
class IOSFloatingButton: RCTViewManager {
  
  override func view() -> UIView! {
    let button = UIButton(type: .system)
    button.setTitle("iOS", for: .normal)
    button.backgroundColor = UIColor.white
    button.setTitleColor(UIColor.systemBlue, for: .normal)
    button.layer.cornerRadius = 25
    button.layer.borderWidth = 1
    button.layer.borderColor = UIColor.systemBlue.cgColor
    button.addTarget(self, action: #selector(handlePress), for: .touchUpInside)
    
    return button
  }
  
  @objc func handlePress() {
    print("iOS 버튼이 클릭됨!")
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
