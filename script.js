let var1, var2, var3, var4, var5
let allowed = true
let counter = 1

decipher = code => {
    let msg = "Syntax error"

    if (allowed == true) {
        if ((code[0] + code[1] == "1=")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "1") { varLocated = true }
                    if (iterator == "=") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            var1 = varVal

            msg = "Variable 1 has been set to '" + var1 + "'."
        }
        if ((code[0] + code[1] == "2=")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "2") { varLocated = true }
                    if (iterator == "=") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            var2 = varVal

            msg = "Variable 2 has been set to '" + var2 + "'."
        }
        if ((code[0] + code[1] == "3=")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "3") { varLocated = true }
                    if (iterator == "=") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            var3 = varVal

            msg = "Variable 3 has been set to '" + var3 + "'."
        }
        if ((code[0] + code[1] == "4=")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "4") { varLocated = true }
                    if (iterator == "=") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            var4 = varVal

            msg = "Variable 4 has been set to '" + var4 + "'."
        }
        if ((code[0] + code[1] == "5=")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "5") { varLocated = true }
                    if (iterator == "=") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            var5 = varVal

            msg = "Variable 5 has been set to '" + var5 + "'."
        }
        if ((code[0] + code[1] == "1?")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "1") { varLocated = true }
                    if (iterator == "?") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            msg = "<input type='text' style='background-color: transparent; color: white' class='form' id='" + counter + "' title='" + varVal + "'><button onclick='submit(1, " + counter + ")' type='submit' class='btn btn-info'>Submit</button>"
            document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()" disabled>Run Code</button><button class="btn btn-danger" onclick="cls()" disabled>Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()" disabled>Purge variables</button>'
            counter++
        }
        if ((code[0] + code[1] == "2?")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "2") { varLocated = true }
                    if (iterator == "?") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            msg = "<input type='text' style='background-color: transparent; color: white' class='form' id='" + counter + "' title='" + varVal + "'><button onclick='submit(2, " + counter + ")' type='submit' class='btn btn-info'>Submit</button>"
            document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()" disabled>Run Code</button><button class="btn btn-danger" onclick="cls()" disabled>Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()" disabled>Purge variables</button>'
            counter++
        }
        if ((code[0] + code[1] == "3?")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "3") { varLocated = true }
                    if (iterator == "?") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            msg = "<input type='text' style='background-color: transparent; color: white' class='form' id='" + counter + "' title='" + varVal + "'><button onclick='submit(3, " + counter + ")' type='submit' class='btn btn-info'>Submit</button>"
            document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()" disabled>Run Code</button><button class="btn btn-danger" onclick="cls()" disabled>Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()" disabled>Purge variables</button>'
            counter++
        }
        if ((code[0] + code[1] == "4?")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "4") { varLocated = true }
                    if (iterator == "?") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            msg = "<input type='text' style='background-color: transparent; color: white' class='form' id='" + counter + "' title='" + varVal + "'><button onclick='submit(4, " + counter + ")' type='submit' class='btn btn-info'>Submit</button>"
            document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()" disabled>Run Code</button><button class="btn btn-danger" onclick="cls()" disabled>Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()" disabled>Purge variables</button>'
            counter++
        }
        if ((code[0] + code[1] == "5?")) {
            let varLocated, varAssigned, varVal
            varVal = ""

            for (const iterator of code) {
                if ((varLocated != true) | (varAssigned != true)) {
                    if (iterator == "5") { varLocated = true }
                    if (iterator == "?") { varAssigned = true }
                } else {
                    varVal += iterator
                }
            }

            msg = "<input type='text' style='background-color: transparent; color: white' class='form' id='" + counter + "' title='" + varVal + "'><button onclick='submit(5, " + counter + ")' type='submit' class='btn btn-info'>Submit</button>"
            document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()" disabled>Run Code</button><button class="btn btn-danger" onclick="cls()" disabled>Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()" disabled>Purge variables</button>'
            counter++
        }
        if (code[0] == ">") {
            let returnActivated, varVal
            varVal = ""

            for (const iterator of code) {
                if (returnActivated != true) {
                    if (iterator == ">") { returnActivated = true }
                } else {
                    varVal += iterator
                }
            }

            msg = varVal
        }
        if (code == "<1>") { msg = var1 }
        if (code == "<2>") { msg = var2 }
        if (code == "<3>") { msg = var3 }
        if (code == "<4>") { msg = var4 }
        if (code == "<5>") { msg = var5 }
    } else {
        msg = "This statement was skipped."
        allowed = true
    }
    if ((code[0] + code[1] == "1/")) {
        let varLocated, conditionAssigned, varVal
        varVal = ""

        for (const iterator of code) {
            if ((varLocated != true) | (conditionAssigned != true)) {
                if (iterator == "1") { varLocated = true }
                if (iterator == "/") { conditionAssigned = true }
            } else {
                varVal += iterator
            }
        }

        if (var1 == varVal) { allowed = true } else { allowed = false }

        msg = "Condition has been set."
    }
    if ((code[0] + code[1] == "2/")) {
        let varLocated, conditionAssigned, varVal
        varVal = ""

        for (const iterator of code) {
            if ((varLocated != true) | (conditionAssigned != true)) {
                if (iterator == "2") { varLocated = true }
                if (iterator == "/") { conditionAssigned = true }
            } else {
                varVal += iterator
            }
        }

        if (var2 == varVal) { allowed = true } else { allowed = false }

        msg = "Condition has been set."
    }
    if ((code[0] + code[1] == "3/")) {
        let varLocated, conditionAssigned, varVal
        varVal = ""

        for (const iterator of code) {
            if ((varLocated != true) | (conditionAssigned != true)) {
                if (iterator == "3") { varLocated = true }
                if (iterator == "/") { conditionAssigned = true }
            } else {
                varVal += iterator
            }
        }

        if (var3 == varVal) { allowed = true } else { allowed = false }

        msg = "Condition has been set."
    }
    if ((code[0] + code[1] == "4/")) {
        let varLocated, conditionAssigned, varVal
        varVal = ""

        for (const iterator of code) {
            if ((varLocated != true) | (conditionAssigned != true)) {
                if (iterator == "4") { varLocated = true }
                if (iterator == "/") { conditionAssigned = true }
            } else {
                varVal += iterator
            }
        }

        if (var4 == varVal) { allowed = true } else { allowed = false }

        msg = "Condition has been set."
    }
    if ((code[0] + code[1] == "5/")) {
        let varLocated, conditionAssigned, varVal
        varVal = ""

        for (const iterator of code) {
            if ((varLocated != true) | (conditionAssigned != true)) {
                if (iterator == "5") { varLocated = true }
                if (iterator == "/") { conditionAssigned = true }
            } else {
                varVal += iterator
            }
        }

        if (var5 == varVal) { allowed = true } else { allowed = false }

        msg = "Condition has been set."
    }

    return msg
}

run = () => document.getElementById("output").innerHTML += "<li>" + decipher(document.getElementById("code").value) + "</li>"
cls = () => document.getElementById("output").innerHTML = ""
purgeVars = () => {
    var1 = null
    var2 = null
    var3 = null
    var4 = null
    var5 = null
}

submit = (variable, text) => {
    if (variable == 1) {var1 = (document.getElementById(text.toString()).value)}
    if (variable == 2) {var2 = (document.getElementById(text.toString()).value)}
    if (variable == 3) {var3 = (document.getElementById(text.toString()).value)}
    if (variable == 4) {var4 = (document.getElementById(text.toString()).value)}
    if (variable == 5) {var5 = (document.getElementById(text.toString()).value)}
    document.getElementById("control").innerHTML = '<button class="btn btn-success" onclick="run()">Run Code</button><button class="btn btn-danger" onclick="cls()">Clear terminal</button><button class="btn btn-warning" onclick="purgeVars()">Purge variables</button>'
}