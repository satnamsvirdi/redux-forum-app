import { useSelector } from "react-redux";
import "./Question.css";

import AddAnswer from "../Answers/AddAnswer";
import DisabledInput from "../Answers/DisabledInput";

const Question = ({ match }) => {
	const questions = useSelector((state) => state.questions);
	const answers = useSelector((state) => state.answers);
	const { authState } = useSelector((state) => state.auth);

	const matchId = String(match.params.id);

	const filteredQuestion = questions.filter(
		(ques) => String(ques.id) === matchId
	);
	const filteredAnswer = answers.filter((ans) => String(ans.qid) === matchId);

	return (
		<>
			<article className="content-container">
				<div className="question-wrapper">
					<h3 className="question-heading">
						{filteredQuestion[0]?.content
							? filteredQuestion[0]?.content
							: "Question lost in space"}
					</h3>
				</div>
				<div className="answers-container">
					<h5 className="answers-container-heading">Answers</h5>

					{filteredAnswer &&
						filteredAnswer.map((answer) => {
							return (
								<div
									className="answer-item "
									key={answer.answerId}
								>
									<section className="answer-content">
										<p>{answer.body}</p>
									</section>
									<div className="answer-meta">
										<span>
											Author{" "}
											<a href="#">{answer.author}</a>
										</span>
										<span> Date: {answer.created}</span>
									</div>
								</div>
							);
						})}

					{filteredQuestion[0]?.content ? (
						filteredAnswer > -1 ? (
							<div className="no-answer-box">
								<h2
									style={{
										textAlign: "center",
										fontWeight: 400,
									}}
								>
									Be the first to add answer
								</h2>
							</div>
						) : null
					) : (
						<div className="no-answer-box">
							<h2
								style={{
									textAlign: "center",
									fontWeight: 400,
								}}
							>
								Lost questions have lost answers too
							</h2>
						</div>
					)}
				</div>
			</article>

			{filteredQuestion[0]?.content ? (
				authState ? (
					<AddAnswer matchId={matchId} />
				) : (
					<DisabledInput />
				)
			) : null}
		</>
	);
};

export default Question;
