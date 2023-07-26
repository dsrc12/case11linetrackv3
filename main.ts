input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.stopMotor(neZha.MotorList.M4)
})
input.onButtonPressed(Button.B, function () {
    neZha.setMotorSpeed(neZha.MotorList.M4, -20)
    neZha.stopMotor(neZha.MotorList.M1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M4, -20)
})
basic.showString("LT3")
basic.forever(function () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M4, -50)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -50)
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -20)
        neZha.setMotorSpeed(neZha.MotorList.M4, -20)
    }
})
