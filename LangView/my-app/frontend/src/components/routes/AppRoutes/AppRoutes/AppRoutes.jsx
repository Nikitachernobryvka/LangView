import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "../../../../pages/MainPage";
import { CSharpPage } from "../../../../pages/CSharpPage";
import { PythonPage } from "../../../../pages/PythonPage";
import { JavaPage } from "../../../../pages/JavaPage/JavaPage";
import { JavaScriptPage } from "../../../../pages/JavaScriptPage";
import { HTMLPage } from "../../../../pages/HTMLPage";
import { CSSPage } from "../../../../pages/CSSPage";
import { SQLPage } from "../../../../pages/SQLPage";
import { TestBeginPage } from "../../../../pages/TestBeginPage";
import { TestPage } from "../../../../pages/TestPage";
import { TestResultPage } from "../../../../pages/TestResultPage";
import { Layout } from "../../../layouts/Layout/Layout";
import { LoginPage } from "../../../../pages/LoginPage/LoginPage"
import { SignUpPage } from "../../../../pages/SignUpPage/SignUpPage"
import { LeaderboardPage } from "../../../../pages/LeaderboradPage";

import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<MainPage />} />
            <Route path="csharp" element={<CSharpPage />} />
            <Route path="python" element={<PythonPage />} />
            <Route path="java" element={<JavaPage />} />
            <Route path="javascript" element={<JavaScriptPage />} />
            <Route path="html" element={<HTMLPage />} />
            <Route path="css" element={<CSSPage />} />
            <Route path="sql" element={<SQLPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/testbegin" element={<ProtectedRoute><TestBeginPage /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><TestPage /></ProtectedRoute>} />
          <Route path="/result" element={<ProtectedRoute><TestResultPage /></ProtectedRoute>} />
          <Route path="/leadboard" element={<ProtectedRoute><LeaderboardPage/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
