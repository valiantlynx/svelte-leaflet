import random
import re
import long_responses as long


class ChatBot:
    def __init__(self):
        self.state = "neutral"
        self.keywords = {
            "happy": ["happy", "glad", "wonderful", "amazing"],
            "angry": ["angry", "mad", "frustrated", "annoyed"],
            "sad": ["sad", "unhappy", "depressed", "down"],
        }

    def message_probability(self, user_message, recognised_words, single_response=False, required_words=[]):
        message_certainty = 0
        has_required_words = True

        for word in user_message:
            if word in recognised_words:
                message_certainty += 1

        percentage = float(message_certainty) / float(len(recognised_words))

        for word in required_words:
            if word not in user_message:
                has_required_words = False
                break

        if has_required_words or single_response:
            return int(percentage * 100)
        else:
            return 0

    def check_all_messages(self, message):
        highest_prob_list = {}

        def response(bot_response, list_of_words, single_response=False, required_words=[]):
            nonlocal highest_prob_list
            highest_prob_list[bot_response] = self.message_probability(
                message, list_of_words, single_response, required_words)

        # State responses
        if self.state == "happy":
            response('Everything is wonderful!', ['happy', 'glad', 'wonderful', 'amazing'], single_response=True)
        elif self.state == "angry":
            response('I am quite frustrated!', ['angry', 'mad', 'frustrated', 'annoyed'], single_response=True)
        elif self.state == "sad":
            response('Feeling a bit down...', ['sad', 'unhappy', 'depressed', 'down'], single_response=True)

        # General responses, 
        response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo'], single_response=True)
        response('See you!', ['bye', 'goodbye'], single_response=True)
        response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], required_words=['how'])
        response('You\'re welcome!', ['thank', 'thanks'], single_response=True)
        response('Thank you!', ['i', 'love', 'code', 'palace'], required_words=['code', 'palace'])
        
        # Longer responses
        response(long.R_ADVICE, ['give', 'advice'], required_words=['advice'])
        response(long.R_EATING, ['what', 'you', 'eat'], required_words=['you', 'eat'])

        best_match = max(highest_prob_list, key=highest_prob_list.get)
        return long.unknown() if highest_prob_list[best_match] < 1 else best_match


    def get_response(self, user_input):
        split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
        response = self.check_all_messages(split_message)
        return response

    def update_state(self, user_input):
        for state, keywords in self.keywords.items():
            if any(word in user_input.lower() for word in keywords):
                self.state = state
                break

    def respond(self, user_input):
        self.update_state(user_input)
        return self.get_response(user_input)

if __name__ == "__main__":
    bot = ChatBot()
    print("Welcome to the chat bot! Type 'quit' to exit.")
    while True:
        user_input = input("You: ")

        if user_input == "quit":
            break

        print("Debug: " + bot.state)
        print("Bot:", bot.respond(user_input))
